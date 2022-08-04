import { UnwrapNestedRefs } from "@vue/reactivity";
import L from "leaflet";


interface UseLeafletControllerParams<T extends Record<string, any>> {
  container: string;
  center: L.LatLngExpression;
  zoom: number;
  tileLayer?: string;
  options?: L.MapOptions;
  location?: boolean;
  onLocationUpdate?: (e: L.LocationEvent) => void;
  properties?: T;
}

interface MarkerControllerParams {
  name: string;
  latlng: L.LatLngExpression;
  iconOptions: L.DivIconOptions;
  markerOptions?: L.MarkerOptions;
  svgCls?: string;
  iconSvg?: string;
}

interface MarkerController {
  name: string;
  marker: L.Marker | L.CircleMarker;
  cls: (cls: string) => void;
  addToCls: (cls: string) => void;
  svgCls: (cls: string) => void;
  addToSvgCls: (cls: string) => void;
}

interface MarkerControllerGroupParams {
  name: string;
  controllers: Record<string, MarkerController>;
}

interface MarkerControllerGroup {
  name: string;
  controllers: Record<string, MarkerController>;
  features: L.FeatureGroup;
}

/** The map state */
interface LeafletControllerState {
  /** The current zoom level */
  zoom: number;
  /** The {@link MarkerControllerGroup} groups present on the map */
  groups: Record<string, MarkerControllerGroup>;
  /** The {@link MarkerController} groups present on the map */
  markers: Record<string, MarkerController>;
  /** The map ready state */
  isReady: boolean;
  /** Can the controller use the user geolocation features */
  canGeolocate: boolean;
  /** The current user position  */
  userPosition: L.LocationEvent | null;
}

/** The main map controller */
interface MapController<T extends Record<string, any>> {
  /** The Leaflet map object */
  readonly map: L.Map;
  /** The reactive map state */
  readonly state: UnwrapNestedRefs<LeafletControllerState>;
  /** The reactive controller properties */
  readonly props: UnwrapNestedRefs<T>;
  /** Initialize the map */
  setMap: (params: UseLeafletControllerParams<T>) => void;
  /** Trigger a map resize */
  resize: () => void;
  /** Remove all marker controller groups */
  clearMapGroups: () => void;
  /** Reset the map to it's initial state: center and zoom and clear all items on map */
  resetMap: () => void;
  /** Add a marker controller */
  addMarkerController: (c: MarkerController) => void;
  /** Remove a marker controller */
  removeMarkerController: (name: string) => void;
  /** Add a marker controller group */
  addGroup: (group: MarkerControllerGroup) => void;
  /** Remove a marker controller group */
  removeGroup: (name: string) => void;
  /** Fit bounds for given coordinates and user position */
  fitUserLatlng: (latlng: L.LatLngTuple) => void;
  /** Calculate the distance from given coordinates to the user position */
  distanceFromUser: (latlng: L.LatLng) => number;
  /** Set the on location found callback */
  setLocate: (onLocationUpdate?: ((e: L.LocationEvent) => void) | undefined, onLocationError?: ((e: L.ErrorEvent) => void) | undefined) => void;
  /** Reset the location callback to default */
  resetLocate: (onLocationUpdate?: ((e: L.LocationEvent) => void) | undefined, onLocationError?: () => void) => void;
}

export {
  LeafletControllerState,
  UseLeafletControllerParams,
  MarkerControllerParams,
  MarkerController,
  MarkerControllerGroupParams,
  MarkerControllerGroup,
  MapController,
}