import L from "leaflet";
import { LeafletControllerState, MarkerController, SetMapParams, MarkerControllerGroup, MapController } from "./interfaces";

/** Create a map controller */
function useMapController<T extends Record<string, any>>(): MapController<T> {
  /** The reactive map state */
  const state: LeafletControllerState = {
    zoom: 1,
    groups: {},
    markers: {},
    isReady: false,
    canGeolocate: false,
    userPosition: null,
  };
  // internal state
  let _positionMarker: L.Marker | L.CircleMarker = L.circleMarker([0, 0]);
  let _initialCenter: L.LatLngExpression = [0, 0];
  let _initialZoom = 1;
  let _tileLayer = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
  let _map: L.Map;

  const _onLocationFound = (e: L.LocationEvent) => {
    //console.log("Location", e)
    if (!_map.hasLayer(_positionMarker)) {
      _positionMarker.addTo(_map)
    }
    _positionMarker.setLatLng([e.latlng.lat, e.latlng.lng]);
  }

  const _onLocationError = (e: L.ErrorEvent) => {
    if (e.code == 1) {
      // the user denied the geolocation prompt
      state.canGeolocate = false;
      _map.stopLocate();
    }
    //console.log("Location error", e.message)
  }

  const setLocate = (onLocationUpdate?: (e: L.LocationEvent) => void, onLocationError?: (e: L.ErrorEvent) => void) => {
    _map.on('locationfound', (e) => {
      state.userPosition = e;
      state.canGeolocate = true;
      _onLocationFound(e);
      if (onLocationUpdate) {
        onLocationUpdate(e)
      }
    });
    _map.on('locationerror', (e) => {
      _onLocationError(e);
      if (onLocationError) {
        onLocationError(e)
      }
    });
    _map.locate({
      watch: true,
      enableHighAccuracy: true
    });
  }

  const resetLocate = (onLocationUpdate?: (e: L.LocationEvent) => void, onLocationError?: () => void) => {
    _map.stopLocate();
    setLocate(onLocationUpdate, onLocationError);
  }

  const resize = () => {
    const setSize = () => _map.invalidateSize();
    setTimeout(setSize, 0);
  }

  const setMap = (params: SetMapParams) => {
    state.isReady = false;
    // set initial stuff
    _initialCenter = params.center;
    _initialZoom = params.zoom;
    if (params.tileLayer) {
      _tileLayer = params.tileLayer
    }
    // set the _map
    _map = L.map(params.container, params.options ?? {}).setView(params.center, params.zoom);
    L.tileLayer(_tileLayer).addTo(_map);
    resize()
    _map.whenReady(() => {
      state.isReady = true;
      if (params.location === true) {
        state.canGeolocate = true;
        setLocate(params.onLocationUpdate)
      }
    });
  }

  const addGroup = (group: MarkerControllerGroup) => {
    if (group.name in state.groups) {
      throw new Error(`Group ${group.name} already present in _map controller state`)
    }
    state.groups[group.name] = group;
    group.features.addTo(_map);
  }

  const removeGroup = (name: string) => {
    const g = state.groups[name];
    if (!g) {
      throw new Error(`Group ${name} not found in _map groups ${Object.keys(state.groups)}`)
    }
    g.features.removeFrom(_map);
    delete state.groups[name];
  }

  const addMarkerController = (c: MarkerController) => {
    if (Object.keys(state.markers).includes(c.name)) {
      throw new Error(`Marker key ${c.name} already present in _map controller state`)
    }
    state.markers[c.name] = c;
    c.marker.addTo(_map)
  }

  const removeMarkerController = (name: string) => {
    if (!Object.keys(state.markers).includes(name)) {
      throw new Error(`Marker key ${name} not found in _map controller state`)
    }
    state.markers[name].marker.removeFrom(_map);
    delete state.markers[name]
  }

  const fitUserLatlng = (latlng: L.LatLngTuple) => {
    if (state.canGeolocate && state.userPosition) {
      _map.fitBounds([latlng, [state.userPosition.latlng.lat, state.userPosition.latlng.lng]])
    } else {
      console.log("Can not fit bounds: no known user position")
    }
  }

  const distanceFromUser = (latlng: L.LatLng): number => {
    let d = 0;
    if (state.userPosition) {
      d = latlng.distanceTo(state.userPosition.latlng)
    } else {
      console.log("Can not calculate distance: no known user position")
    }
    return d
  }

  const clearMapGroups = () => {
    for (const g in state.groups) {
      removeGroup(g)
    }
  }

  const resetMap = () => {
    clearMapGroups()
    _map.setView(_initialCenter, _initialZoom)
  }

  return {
    /** The Leaflet map */
    get map(): L.Map {
      return _map
    },
    /** The map state */
    state,
    /** Initialize the map */
    setMap,
    /** Trigger a map resize */
    resize,
    /** Reset the map to it's initial state: center and zoom and clear all items on map */
    resetMap,
    /** Add a marker controller */
    addMarkerController,
    /** Remove a marker controller */
    removeMarkerController,
    /** Add a marker controller group */
    addGroup,
    /** Remove a marker controller group */
    removeGroup,
    /** Remove all marker controller groups */
    clearMapGroups,
    /** Set the on location found callback */
    setLocate,
    /** Reset the location callback */
    resetLocate,
    /** Fit bounds for given coordinates and user position */
    fitUserLatlng,
    /** Calculate the distance from given coordinates to the user position */
    distanceFromUser,
  }
}

export default useMapController;