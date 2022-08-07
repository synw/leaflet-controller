import L from "leaflet";
import { ControllerGroup, ControllerGroupParams, MarkerController, PolygonController, PolylineController } from "./interfaces";

/** Create a controller group */
const useControllerGroup = (group: ControllerGroupParams): ControllerGroup => {
  const name = group.name;
  const controllers = group.controllers;
  const _features = new Array<L.Layer>();

  const _pushControllerFeatures = (controller: MarkerController | PolylineController | PolygonController) => {
    switch (controller.type) {
      case "marker":
        _features.push((controller as MarkerController).marker)
        break;
      case "polyline":
        _features.push((controller as PolylineController).polyline)
      case "polygon":
        _features.push((controller as PolygonController).polygon)
    }
  }

  // init
  for (const [_name, _controller] of Object.entries(controllers)) {
    _pushControllerFeatures(_controller)
  }
  const features = L.featureGroup(_features);

  const addController = (controller: MarkerController | PolylineController | PolygonController) => {
    controllers[controller.name] = controller;
    _pushControllerFeatures(controller)
  };

  const _getFeatureType = <T = MarkerController | PolylineController | PolygonController>(name: string): Record<string, T> => {
    const _f = Object.values(controllers).filter((c) => c.type === name);
    const _items: Record<string, T> = {};
    _f.forEach((feat) => {
      _items[feat.name] = (feat as unknown as T);
    })
    return _items
  };

  const _getMarkerControllers = () => _getFeatureType<MarkerController>("marker");

  const _getPolylineControllers = () => _getFeatureType<PolylineController>("polyline");

  const _getPolygonControllers = () => _getFeatureType<PolygonController>("polygon");

  return {
    name,
    controllers,
    features,
    get markerControllers() {
      return _getMarkerControllers()
    },
    get polylineControllers() {
      return _getPolylineControllers()
    },
    get polygonControllers() {
      return _getPolygonControllers()
    }
  }
}

export default useControllerGroup