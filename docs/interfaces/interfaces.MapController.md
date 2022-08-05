[Leaflet controller documentation](../README.md) / [Modules](../modules.md) / [interfaces](../modules/interfaces.md) / MapController

# Interface: MapController<T\>

[interfaces](../modules/interfaces.md).MapController

The main map controller

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

## Table of contents

### Properties

- [addGroup](interfaces.MapController.md#addgroup)
- [addMarkerController](interfaces.MapController.md#addmarkercontroller)
- [clearMapGroups](interfaces.MapController.md#clearmapgroups)
- [distanceFromUser](interfaces.MapController.md#distancefromuser)
- [fitUserLatlng](interfaces.MapController.md#fituserlatlng)
- [map](interfaces.MapController.md#map)
- [removeGroup](interfaces.MapController.md#removegroup)
- [removeMarkerController](interfaces.MapController.md#removemarkercontroller)
- [resetLocate](interfaces.MapController.md#resetlocate)
- [resetMap](interfaces.MapController.md#resetmap)
- [resize](interfaces.MapController.md#resize)
- [setLocate](interfaces.MapController.md#setlocate)
- [setMap](interfaces.MapController.md#setmap)
- [state](interfaces.MapController.md#state)

## Properties

### addGroup

• **addGroup**: (`group`: [`MarkerControllerGroup`](interfaces.MarkerControllerGroup.md)) => `void`

#### Type declaration

▸ (`group`): `void`

Add a marker controller group

##### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`MarkerControllerGroup`](interfaces.MarkerControllerGroup.md) |

##### Returns

`void`

#### Defined in

[interfaces.ts:78](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L78)

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

[interfaces.ts:74](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L74)

___

### clearMapGroups

• **clearMapGroups**: () => `void`

#### Type declaration

▸ (): `void`

Remove all marker controller groups

##### Returns

`void`

#### Defined in

[interfaces.ts:70](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L70)

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

[interfaces.ts:84](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L84)

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

[interfaces.ts:82](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L82)

___

### map

• `Readonly` **map**: `Map`

The Leaflet map object

#### Defined in

[interfaces.ts:62](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L62)

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

[interfaces.ts:80](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L80)

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

[interfaces.ts:76](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L76)

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

[interfaces.ts:88](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L88)

___

### resetMap

• **resetMap**: () => `void`

#### Type declaration

▸ (): `void`

Reset the map to it's initial state: center and zoom and clear all items on map

##### Returns

`void`

#### Defined in

[interfaces.ts:72](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L72)

___

### resize

• **resize**: () => `void`

#### Type declaration

▸ (): `void`

Trigger a map resize

##### Returns

`void`

#### Defined in

[interfaces.ts:68](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L68)

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

[interfaces.ts:86](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L86)

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

[interfaces.ts:66](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L66)

___

### state

• **state**: [`LeafletControllerState`](interfaces.LeafletControllerState.md)

The reactive map state

#### Defined in

[interfaces.ts:64](https://github.com/synw/leaflet-controller/blob/4e36a5e/src/interfaces.ts#L64)
