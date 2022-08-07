import L from "leaflet";
import { PolylineController, PolylineControllerParams } from "./interfaces";

/** Create a polyline controller */
const usePolylineController = (params: PolylineControllerParams): PolylineController => {
  const name = params.name;
  const type = "polyline";
  let polyline = params.polyline;

  return {
    name,
    type,
    polyline
  }
}

export default usePolylineController