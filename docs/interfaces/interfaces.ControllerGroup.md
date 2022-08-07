[Leaflet controller documentation](../README.md) / [Modules](../modules.md) / [interfaces](../modules/interfaces.md) / ControllerGroup

# Interface: ControllerGroup

[interfaces](../modules/interfaces.md).ControllerGroup

## Table of contents

### Properties

- [controllers](interfaces.ControllerGroup.md#controllers)
- [features](interfaces.ControllerGroup.md#features)
- [markerControllers](interfaces.ControllerGroup.md#markercontrollers)
- [name](interfaces.ControllerGroup.md#name)
- [polygonControllers](interfaces.ControllerGroup.md#polygoncontrollers)
- [polylineControllers](interfaces.ControllerGroup.md#polylinecontrollers)

## Properties

### controllers

• **controllers**: `Record`<`string`, [`MarkerController`](interfaces.MarkerController.md) \| [`PolylineController`](interfaces.PolylineController.md) \| [`PolygonController`](interfaces.PolygonController.md)\>

#### Defined in

[interfaces.ts:63](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L63)

___

### features

• **features**: `FeatureGroup`<`any`\>

#### Defined in

[interfaces.ts:64](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L64)

___

### markerControllers

• `Readonly` **markerControllers**: `Record`<`string`, [`MarkerController`](interfaces.MarkerController.md)\>

#### Defined in

[interfaces.ts:65](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L65)

___

### name

• **name**: `string`

#### Defined in

[interfaces.ts:62](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L62)

___

### polygonControllers

• `Readonly` **polygonControllers**: `Record`<`string`, [`PolygonController`](interfaces.PolygonController.md)\>

#### Defined in

[interfaces.ts:67](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L67)

___

### polylineControllers

• `Readonly` **polylineControllers**: `Record`<`string`, [`PolylineController`](interfaces.PolylineController.md)\>

#### Defined in

[interfaces.ts:66](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L66)
