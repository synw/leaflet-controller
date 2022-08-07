[Leaflet controller documentation](../README.md) / [Modules](../modules.md) / [interfaces](../modules/interfaces.md) / MapController

# Interface: MapController

[interfaces](../modules/interfaces.md).MapController

The main map controller

## Table of contents

### Properties

- [addGroup](interfaces.MapController.md#addgroup)
- [addMarkerController](interfaces.MapController.md#addmarkercontroller)
- [addPolygonController](interfaces.MapController.md#addpolygoncontroller)
- [addPolylineController](interfaces.MapController.md#addpolylinecontroller)
- [clearMapGroups](interfaces.MapController.md#clearmapgroups)
- [distanceFromUser](interfaces.MapController.md#distancefromuser)
- [fitUserLatlng](interfaces.MapController.md#fituserlatlng)
- [map](interfaces.MapController.md#map)
- [removeGroup](interfaces.MapController.md#removegroup)
- [removeMarkerController](interfaces.MapController.md#removemarkercontroller)
- [removePolygonController](interfaces.MapController.md#removepolygoncontroller)
- [removePolylineController](interfaces.MapController.md#removepolylinecontroller)
- [resetLocate](interfaces.MapController.md#resetlocate)
- [resetMap](interfaces.MapController.md#resetmap)
- [resize](interfaces.MapController.md#resize)
- [setLocate](interfaces.MapController.md#setlocate)
- [setMap](interfaces.MapController.md#setmap)
- [state](interfaces.MapController.md#state)

## Properties

### addGroup

• **addGroup**: (`group`: [`ControllerGroup`](interfaces.ControllerGroup.md)) => `void`

#### Type declaration

▸ (`group`): `void`

Add a marker controller group

##### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ControllerGroup`](interfaces.ControllerGroup.md) |

##### Returns

`void`

#### Defined in

[interfaces.ts:117](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L117)

___

### addMarkerController

• **addMarkerController**: (`c`: [`MarkerController`](interfaces.MarkerController.md)) => `void`

#### Type declaration

▸ (`c`): `void`

Add a marker controller

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`MarkerController`](interfaces.MarkerController.md) |

##### Returns

`void`

#### Defined in

[interfaces.ts:105](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L105)

___

### addPolygonController

• **addPolygonController**: (`c`: [`PolygonController`](interfaces.PolygonController.md)) => `void`

#### Type declaration

▸ (`c`): `void`

Add a polygon controller

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`PolygonController`](interfaces.PolygonController.md) |

##### Returns

`void`

#### Defined in

[interfaces.ts:113](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L113)

___

### addPolylineController

• **addPolylineController**: (`c`: [`PolylineController`](interfaces.PolylineController.md)) => `void`

#### Type declaration

▸ (`c`): `void`

Add a polyline controller

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`PolylineController`](interfaces.PolylineController.md) |

##### Returns

`void`

#### Defined in

[interfaces.ts:109](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L109)

___

### clearMapGroups

• **clearMapGroups**: () => `void`

#### Type declaration

▸ (): `void`

Remove all marker controller groups

##### Returns

`void`

#### Defined in

[interfaces.ts:101](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L101)

___

### distanceFromUser

• **distanceFromUser**: (`latlng`: `LatLng`) => `number`

#### Type declaration

▸ (`latlng`): `number`

Calculate the distance from given coordinates to the user position

##### Parameters

| Name | Type |
| :------ | :------ |
| `latlng` | `LatLng` |

##### Returns

`number`

#### Defined in

[interfaces.ts:123](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L123)

___

### fitUserLatlng

• **fitUserLatlng**: (`latlng`: `LatLngTuple`) => `void`

#### Type declaration

▸ (`latlng`): `void`

Fit bounds for given coordinates and user position

##### Parameters

| Name | Type |
| :------ | :------ |
| `latlng` | `LatLngTuple` |

##### Returns

`void`

#### Defined in

[interfaces.ts:121](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L121)

___

### map

• `Readonly` **map**: `Map`

The Leaflet map object

#### Defined in

[interfaces.ts:93](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L93)

___

### removeGroup

• **removeGroup**: (`name`: `string`) => `void`

#### Type declaration

▸ (`name`): `void`

Remove a marker controller group

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`void`

#### Defined in

[interfaces.ts:119](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L119)

___

### removeMarkerController

• **removeMarkerController**: (`name`: `string`) => `void`

#### Type declaration

▸ (`name`): `void`

Remove a marker controller

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`void`

#### Defined in

[interfaces.ts:107](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L107)

___

### removePolygonController

• **removePolygonController**: (`name`: `string`) => `void`

#### Type declaration

▸ (`name`): `void`

Remove a polygon controller

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`void`

#### Defined in

[interfaces.ts:115](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L115)

___

### removePolylineController

• **removePolylineController**: (`name`: `string`) => `void`

#### Type declaration

▸ (`name`): `void`

Remove a polyline controller

##### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`void`

#### Defined in

[interfaces.ts:111](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L111)

___

### resetLocate

• **resetLocate**: (`onLocationUpdate?`: (`e`: `LocationEvent`) => `void`, `onLocationError?`: () => `void`) => `void`

#### Type declaration

▸ (`onLocationUpdate?`, `onLocationError?`): `void`

Reset the location callback to default

##### Parameters

| Name | Type |
| :------ | :------ |
| `onLocationUpdate?` | (`e`: `LocationEvent`) => `void` |
| `onLocationError?` | () => `void` |

##### Returns

`void`

#### Defined in

[interfaces.ts:127](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L127)

___

### resetMap

• **resetMap**: () => `void`

#### Type declaration

▸ (): `void`

Reset the map to it's initial state: center and zoom and clear all items on map

##### Returns

`void`

#### Defined in

[interfaces.ts:103](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L103)

___

### resize

• **resize**: () => `void`

#### Type declaration

▸ (): `void`

Trigger a map resize

##### Returns

`void`

#### Defined in

[interfaces.ts:99](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L99)

___

### setLocate

• **setLocate**: (`onLocationUpdate?`: (`e`: `LocationEvent`) => `void`, `onLocationError?`: (`e`: `ErrorEvent`) => `void`) => `void`

#### Type declaration

▸ (`onLocationUpdate?`, `onLocationError?`): `void`

Set the on location found callback

##### Parameters

| Name | Type |
| :------ | :------ |
| `onLocationUpdate?` | (`e`: `LocationEvent`) => `void` |
| `onLocationError?` | (`e`: `ErrorEvent`) => `void` |

##### Returns

`void`

#### Defined in

[interfaces.ts:125](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L125)

___

### setMap

• **setMap**: (`params`: [`SetMapParams`](interfaces.SetMapParams.md)) => `void`

#### Type declaration

▸ (`params`): `void`

Initialize the map

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SetMapParams`](interfaces.SetMapParams.md) |

##### Returns

`void`

#### Defined in

[interfaces.ts:97](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L97)

___

### state

• **state**: [`LeafletControllerState`](interfaces.LeafletControllerState.md)

The reactive map state

#### Defined in

[interfaces.ts:95](https://github.com/synw/leaflet-controller/blob/653db9e/src/interfaces.ts#L95)
