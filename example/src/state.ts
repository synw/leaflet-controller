import { User } from "@snowind/state";
import { useMapController } from "leaflet-controller";

const user = new User();
const mapController = useMapController();

export { user, mapController }