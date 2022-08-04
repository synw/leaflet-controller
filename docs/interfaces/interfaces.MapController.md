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
- [props](interfaces.MapController.md#props)
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

src/interfaces.ts:82

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

src/interfaces.ts:78

___

### clearMapGroups

• **clearMapGroups**: () => `void`

#### Type declaration

▸ (): `void`

Remove all marker controller groups

##### Returns

`void`

#### Defined in

src/interfaces.ts:74

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

src/interfaces.ts:88

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

src/interfaces.ts:86

___

### map

• `Readonly` **map**: `Map`

The Leaflet map object

#### Defined in

src/interfaces.ts:64

___

### props

• `Readonly` **props**: `UnwrapNestedRefs`<`T`\>

The reactive controller properties

#### Defined in

src/interfaces.ts:68

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

src/interfaces.ts:84

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

src/interfaces.ts:80

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

src/interfaces.ts:92

___

### resetMap

• **resetMap**: () => `void`

#### Type declaration

▸ (): `void`

Reset the map to it's initial state: center and zoom and clear all items on map

##### Returns

`void`

#### Defined in

src/interfaces.ts:76

___

### resize

• **resize**: () => `void`

#### Type declaration

▸ (): `void`

Trigger a map resize

##### Returns

`void`

#### Defined in

src/interfaces.ts:72

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

src/interfaces.ts:90

___

### setMap

• **setMap**: (`params`: [`UseLeafletControllerParams`](interfaces.UseLeafletControllerParams.md)<`T`\>) => `void`

#### Type declaration

▸ (`params`): `void`

Initialize the map

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`UseLeafletControllerParams`](interfaces.UseLeafletControllerParams.md)<`T`\> |

##### Returns

`void`

#### Defined in

src/interfaces.ts:70

___

### state

• `Readonly` **state**: `Object`

The reactive map state

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `canGeolocate` | `boolean` | Can the controller use the user geolocation features |
| `groups` | `Record`<`string`, [`MarkerControllerGroup`](interfaces.MarkerControllerGroup.md)\> | The [MarkerControllerGroup](interfaces.MarkerControllerGroup.md) groups present on the map |
| `isReady` | `boolean` | The map ready state |
| `markers` | `Record`<`string`, [`MarkerController`](interfaces.MarkerController.md)\> | The [MarkerController](interfaces.MarkerController.md) groups present on the map |
| `userPosition` | ``null`` \| { latlng: { equals: (otherLatLng: LatLngExpression, maxMargin?: number \| undefined) =\> boolean; toString: () =\> string; distanceTo: (otherLatLng: LatLngExpression) =\> number; ... 5 more ...; alt?: number \| undefined; }; ... 12 more ...; layer: any; } | The current user position |
| `zoom` | `number` | The current zoom level |

#### Defined in

src/interfaces.ts:66
