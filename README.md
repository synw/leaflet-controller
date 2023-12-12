# Leaflet controller

[![package](https://img.shields.io/npm/v/leaflet-controller)](https://www.npmjs.com/package/leaflet-controller)

A Typescript friendly stateful map controller for Leaflet

## Install

Install [Leaflet](https://leafletjs.com/) first or use your already installed version
and install the map controller:

```
npm install leaflet-controller
# or
yarn add leaflet-controller
```

## Doc and example

- [Api doc](https://synw.github.io/leaflet-controller/api/)
- [Example](https://synw.github.io/leaflet-controller/example/)

## Usage

The map controller manages the state of the features on the map. The 
[state object](docs/interfaces/interfaces.LeafletControllerState.md) keeps
track of:

- [Markers](#marker-controller): marker controllers on the map
- [Polylines](#polyline-controller): polyline controllers on the map
- [Polygons](#polygon-controller): polygon controllers on the map
- [Controller groups](#controllers-group): group of controllers on the map

The map controller has optional [geolocation features](#geolocation-features)

### Map controller

A [map controller](docs/interfaces/interfaces.MapController.md):

```typescript
import { useMapController} from "leaflet-controller";

const mapController = useMapController();
```

Initialize a map once the map container is mounted:

```typescript
mapController.setMap({
    container: "mapContainer",
    center: [46.192043, 6.774619],
    zoom: 16,
    options: { attributionControl: false, zoomControl: true, zoomAnimation: false },
  })
```

Documentation of the [parameters](docs/interfaces/interfaces.SetMapParams.md)

#### Map methods

- `resize`: trigger a map resize
- `resetMap`: reset the map to it's initial state: center and zoom and clear all items on map

#### Marker methods

- `addMarkerController`: add a marker controller
- `removeMarkerController`: remove a marker controller

#### Geolocation methods

- `setLocate`: set the on location found callback
- `resetLocate`: reset the on location found callback to default
- `fitUserLatlng`: fit bounds for given coordinates and user position
- `distanceFromUser`: calculate the distance from given coordinates to the user position

### Marker controller

A [marker controller](docs/interfaces/interfaces.MarkerController.md). Create a marker:

```typescript
import { useMarkerController } from "leaflet-controller";

const markerController = useMarkerController({
  name: "marker_id",
  latlng: [0,0],
  iconOptions: {
    className: `text-primary text-2xl`,
    html: "<svg ...></svg>"
  },
});
```

Push the marker on the map:

```typescript
mapController.addMarkerController(markerController)
```

Remove it from the map:

```typescript
mapController.removeMarkerController("marker_id")
```

#### Marker icons

To change the css class of the marker div container:

```typescript
mapController.state.markers["marker_id"].cls("text-danger text-2xl")
```

To add to the css class of the marker div container:

```typescript
mapController.state.markers["marker_id"].addToCls("border-2 border-success p-1")
```

#### Marker svg icons

The controller manages the svg markers and can apply css classes directly on the
marker not it's div container like above. To initialize a svg marker:

```typescript
const markerController = useMarkerController({
  // other parameters ...
  iconSvg: "<svg ...></svg>",
  svgCls: `border-2 rounded-full p-1`
});
```

It is possible to change and add to the css class of the svg tag like above
with the `svgCls` and `addToSvgCls` methods

### Polyline controller

A [polyline controller](docs/interfaces/interfaces.PolylineController.md)

```typescript
import L from "leaflet";
import { usePolylineController } from "leaflet-controller";

const polyline = usePolylineController({
  name: "polyline_id",
  polyline: L.polyline([[45.51, -122.68], [37.77, -122.43]]),
})
```

Add it to the map:

```typescript
mapController.addPolylineController(polylineController)
```

Remove it from the map:

```typescript
mapController.removePolylineController("polyline_id")
```

### Polygon controller

A [polygon controller](docs/interfaces/interfaces.PolygonController.md)

```typescript
import L from "leaflet";
import { usePolygonController } from "leaflet-controller";

const polygon = usePolygonController({
  name: "polygon_id",
  polygon: L.polygon([[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]]),
})
```

Add it to the map:

```typescript
polygonController.polygon.addTo(mapController.map)
```

Remove it from the map:

```typescript
mapController.removePolygonController("polygon_id")
```

### Controllers group

A [group of controllers](docs/interfaces/interfaces.ControllerGroup.md). It will be managed on the map
as a Leaflet [FeatureGroup](https://leafletjs.com/reference.html#featuregroup):

```typescript
import { useControllerGroup } from "leaflet-controller";

const group = useControllerGroup({
    name: "group_id",
    controllers: [markerController, polylineController, polygonController]
  })
```

Push the group on the map:

```typescript
mapController.addGroup(group)
```

Access the group features:

```typescript
import L from "leaflet";

const features: L.FeatureGroup = mapController.state.groups["group_id"].features
```

Remove the group from the map:

```typescript
mapController.removeGroup("group_id")
```

### Geolocation features

To enable the user geolocation:

```typescript
mapController.setMap({
  // other parameters ...
  location: true,
  onLocationUpdate: (e) => console.log("Location update", e.latlng), // optional
})
```

It is possible to change the on location update callback. Example: calculate the distance
from the user to a location and use it in a reactive Vue property:

```typescript
import L from "leaflet";
import { reactive } from "@vue/reactivity";

const point = markerController.marker.getLatLng();
const geolocState = reactive({ distance: 0 });

mapController.setLocate((event: L.LocationEvent) => {
  // the map controller will update the prop everytime a location update occurs
  geolocState.distance = Math.trunc(mapController.distanceFromUser(event.latlng))
})
```

