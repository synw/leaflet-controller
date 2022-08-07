import L from "leaflet";
import { PolygonController, PolygonControllerParams } from "./interfaces";

/** Create a polygon controller */
const usePolygonController = (params: PolygonControllerParams): PolygonController => {
  const name = params.name;
  const type = "polygon";
  let polygon = params.polygon;

  return {
    name,
    type,
    polygon
  }
}

export default usePolygonController