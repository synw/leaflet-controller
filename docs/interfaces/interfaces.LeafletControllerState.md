[Leaflet controller documentation](../README.md) / [Modules](../modules.md) / [interfaces](../modules/interfaces.md) / LeafletControllerState

# Interface: LeafletControllerState

[interfaces](../modules/interfaces.md).LeafletControllerState

The map state

## Table of contents

### Properties

- [canGeolocate](interfaces.LeafletControllerState.md#cangeolocate)
- [groups](interfaces.LeafletControllerState.md#groups)
- [isReady](interfaces.LeafletControllerState.md#isready)
- [markers](interfaces.LeafletControllerState.md#markers)
- [polygons](interfaces.LeafletControllerState.md#polygons)
- [polylines](interfaces.LeafletControllerState.md#polylines)
- [userPosition](interfaces.LeafletControllerState.md#userposition)
- [zoom](interfaces.LeafletControllerState.md#zoom)

## Properties

### canGeolocate

• **canGeolocate**: `boolean`

Can the controller use the user geolocation features

#### Defined in

[interfaces.ts:85](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L85)

___

### groups

• **groups**: `Record`<`string`, [`ControllerGroup`](interfaces.ControllerGroup.md)\>

The [ControllerGroup](interfaces.ControllerGroup.md) groups present on the map

#### Defined in

[interfaces.ts:75](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L75)

___

### isReady

• **isReady**: `boolean`

The map ready state

#### Defined in

[interfaces.ts:83](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L83)

___

### markers

• **markers**: `Record`<`string`, [`MarkerController`](interfaces.MarkerController.md)\>

The [MarkerController](interfaces.MarkerController.md) present on the map

#### Defined in

[interfaces.ts:77](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L77)

___

### polygons

• **polygons**: `Record`<`string`, [`PolygonController`](interfaces.PolygonController.md)\>

The [PolygonController](interfaces.PolygonController.md) present on the map

#### Defined in

[interfaces.ts:81](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L81)

___

### polylines

• **polylines**: `Record`<`string`, [`PolylineController`](interfaces.PolylineController.md)\>

The [PolylineController](interfaces.PolylineController.md)  present on the map

#### Defined in

[interfaces.ts:79](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L79)

___

### userPosition

• **userPosition**: ``null`` \| `LocationEvent`

The current user position

#### Defined in

[interfaces.ts:87](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L87)

___

### zoom

• **zoom**: `number`

The current zoom level

#### Defined in

[interfaces.ts:73](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L73)
