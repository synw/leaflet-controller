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
- [userPosition](interfaces.LeafletControllerState.md#userposition)
- [zoom](interfaces.LeafletControllerState.md#zoom)

## Properties

### canGeolocate

• **canGeolocate**: `boolean`

Can the controller use the user geolocation features

#### Defined in

[interfaces.ts:54](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L54)

___

### groups

• **groups**: `Record`<`string`, [`MarkerControllerGroup`](interfaces.MarkerControllerGroup.md)\>

The [MarkerControllerGroup](interfaces.MarkerControllerGroup.md) groups present on the map

#### Defined in

[interfaces.ts:48](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L48)

___

### isReady

• **isReady**: `boolean`

The map ready state

#### Defined in

[interfaces.ts:52](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L52)

___

### markers

• **markers**: `Record`<`string`, [`MarkerController`](interfaces.MarkerController.md)\>

The [MarkerController](interfaces.MarkerController.md) groups present on the map

#### Defined in

[interfaces.ts:50](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L50)

___

### userPosition

• **userPosition**: ``null`` \| `LocationEvent`

The current user position

#### Defined in

[interfaces.ts:56](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L56)

___

### zoom

• **zoom**: `number`

The current zoom level

#### Defined in

[interfaces.ts:46](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L46)
