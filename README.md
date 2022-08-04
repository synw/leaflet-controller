# Leaflet controller

A Typescript fiendly stateful map controller for Leaflet

## Install

Install [Leaflet](https://leafletjs.com/) first or use your already installed version
and install the map controller:

```
npm install leaflet-controller
# or
yarn add leaflet-controller
```

## Usage

### Map controller

Create a map controller [doc](docs/modules/use_map_controller.md):

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

Documentation of the [parameters](docs/interfaces/interfaces.UseLeafletControllerParams.md)

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

A controller to manage a map marker [doc](docs/interfaces/interfaces.MarkerController.md). Create a marker:

```typescript
import { useMarkerController } from "leaflet-controller";

const markerController = useMarkerController({
  name: "markercontroller_id",
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

#### Marker icons

To change the css class of the marker div container:

```typescript
mapController.state.markers["markercontroller_id"].cls("text-danger text-2xl")
```

To add to the css class of the marker div container:

```typescript
mapController.state.markers["markercontroller_id"].addToCls("border-2 border-success p-1")
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

### Marker group controller

Create a group of marker controller. It will be managed on the map
as a Leaflet [FeatureGroup](https://leafletjs.com/reference.html#featuregroup):

```typescript
import { useMarkerControllerGroup } from "leaflet-controller";

const group = useMarkerControllerGroup({
    name: "group_id",
    controllers: [markerController, otherMarkerController]
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

### The map state

The map controller provides a reactive object that holds the map state [doc](docs/interfaces/interfaces.LeafletControllerState.md)

### The map properties

It is possible to declare custom properties when initializing the controller. First define an interface
that describes the custom properties:

```typescript
interface MapControllerProps {
  distance: number;
}
```

Then initialize the map with this properties type:

```typescript
const mapController = useMapController<MapControllerProps>();
mapController.setMap({
  // other parameters ...
  properties: { distance: 0 }
})
```

The custom properties are reactive. To access them:

```typescript
const distance = mapController.props.distance
```

### Geolocation features

To enable the user geolocation:

```typescript
mapController.setMap({
  location: true,
  onLocationUpdate: (e) => console.log("Location update", e.latlng), // optional
})
```

It is possible to change the on location update callback. Example: calculate the distance
from the user to a location and store it in a map controller custom property:

```typescript
//const controller = any MarkerController

mapController.resetLocate((e) => {
  mapController.props.distance = Math.trunc(mapController.distanceFromUser(controller.marker.getLatLng()))
})
```

