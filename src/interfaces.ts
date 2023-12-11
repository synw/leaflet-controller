import L from "leaflet";

interface SetMapParams {
  container: string;
  center: L.LatLngExpression;
  zoom: number;
  tileLayer?: string;
  options?: L.MapOptions;
  location?: boolean;
  onLocationUpdate?: (e: L.LocationEvent) => void;
}

type ControllerType = "marker" | "polyline" | "polygon";

interface BaseController {
  name: string;
  type: ControllerType;
}

interface MarkerControllerParams {
  name: string;
  latlng: L.LatLngExpression;
  iconOptions: L.DivIconOptions;
  markerOptions?: L.MarkerOptions;
  svgCls?: string;
  iconSvg?: string;
}

interface MarkerController extends BaseController {
  marker: L.Marker | L.CircleMarker;
  iconOptions: L.DivIconOptions;
  html: (data: string) => void;
  cls: (cls: string) => void;
  addToCls: (cls: string) => void;
  removeCls: (cls: string) => void;
  svgCls: (cls: string) => void;
  addToSvgCls: (cls: string) => void;
}

interface PolylineControllerParams {
  name: string;
  polyline: L.Polyline;
}

interface PolylineController extends BaseController {
  polyline: L.Polyline;
}

interface PolygonControllerParams {
  name: string;
  polygon: L.Polygon;
}

interface PolygonController extends BaseController {
  name: string;
  polygon: L.Polygon;
}

interface ControllerGroupParams {
  name: string;
  controllers: Record<string, MarkerController | PolylineController | PolygonController>;
}

interface ControllerGroup {
  name: string;
  controllers: Record<string, MarkerController | PolylineController | PolygonController>;
  features: L.FeatureGroup;
  readonly markerControllers: Record<string, MarkerController>;
  readonly polylineControllers: Record<string, PolylineController>;
  readonly polygonControllers: Record<string, PolygonController>;
}

/** The map state */
interface LeafletControllerState {
  /** The current zoom level */
  zoom: number;
  /** The {@link ControllerGroup} groups present on the map */
  groups: Record<string, ControllerGroup>;
  /** The {@link MarkerController} present on the map */
  markers: Record<string, MarkerController>;
  /** The {@link PolylineController}  present on the map */
  polylines: Record<string, PolylineController>;
  /** The {@link PolygonController} present on the map */
  polygons: Record<string, PolygonController>;
  /** The map ready state */
  isReady: boolean;
  /** Can the controller use the user geolocation features */
  canGeolocate: boolean;
  /** The current user position  */
  userPosition: L.LocationEvent | null;
}

/** The main map controller */
interface MapController {
  /** The Leaflet map object */
  readonly map: L.Map;
  /** The reactive map state */
  state: LeafletControllerState;
  /** Initialize the map */
  setMap: (params: SetMapParams) => void;
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
  /** Add a polyline controller */
  addPolylineController: (c: PolylineController) => void
  /** Remove a polyline controller */
  removePolylineController: (name: string) => void
  /** Add a polygon controller */
  addPolygonController: (c: PolygonController) => void
  /** Remove a polygon controller */
  removePolygonController: (name: string) => void
  /** Remove the position marker */
  removePositionMaker: () => void
  /** Add a marker controller group */
  addGroup: (group: ControllerGroup) => void;
  /** Remove a marker controller group */
  removeGroup: (name: string) => void;
  /** Fit bounds for given coordinates list and user position */
  fitUserLatlng: (bounds: Array<L.LatLngTuple>) => void;
  /** Calculate the distance from given coordinates to the user position */
  distanceFromUser: (latlng: L.LatLng) => number;
  /** Set the on location update callback */
  setLocate: (onLocationUpdate?: (e: L.LocationEvent) => void, onLocationError?: (e: L.ErrorEvent) => void) => void;
}

export {
  LeafletControllerState,
  SetMapParams,
  MarkerControllerParams,
  MarkerController,
  ControllerGroupParams,
  ControllerGroup,
  MapController,
  PolylineControllerParams,
  PolylineController,
  PolygonControllerParams,
  PolygonController,
  ControllerType,
}