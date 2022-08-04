import L from "leaflet";
import { MarkerControllerGroupParams } from "./interfaces";

/** Create a marker controller group */
const useMarkerControllerGroup = (group: MarkerControllerGroupParams) => {
  const name = group.name;
  const controllers = group.controllers;
  const _markers = new Array<L.Marker | L.CircleMarker>();
  for (const [_name, _controller] of Object.entries(controllers)) {
    _markers.push(_controller.marker)
  }
  const features = L.featureGroup(_markers)

  return {
    name,
    controllers,
    features
  }
}

export default useMarkerControllerGroup