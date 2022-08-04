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

src/interfaces.ts:56

___

### groups

• **groups**: `Record`<`string`, [`MarkerControllerGroup`](interfaces.MarkerControllerGroup.md)\>

The [MarkerControllerGroup](interfaces.MarkerControllerGroup.md) groups present on the map

#### Defined in

src/interfaces.ts:50

___

### isReady

• **isReady**: `boolean`

The map ready state

#### Defined in

src/interfaces.ts:54

___

### markers

• **markers**: `Record`<`string`, [`MarkerController`](interfaces.MarkerController.md)\>

The [MarkerController](interfaces.MarkerController.md) groups present on the map

#### Defined in

src/interfaces.ts:52

___

### userPosition

• **userPosition**: ``null`` \| `LocationEvent`

The current user position

#### Defined in

src/interfaces.ts:58

___

### zoom

• **zoom**: `number`

The current zoom level

#### Defined in

src/interfaces.ts:48
