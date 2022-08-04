[Leaflet controller documentation](../README.md) / [Modules](../modules.md) / [interfaces](../modules/interfaces.md) / UseLeafletControllerParams

# Interface: UseLeafletControllerParams<T\>

[interfaces](../modules/interfaces.md).UseLeafletControllerParams

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

## Table of contents

### Properties

- [center](interfaces.UseLeafletControllerParams.md#center)
- [container](interfaces.UseLeafletControllerParams.md#container)
- [location](interfaces.UseLeafletControllerParams.md#location)
- [onLocationUpdate](interfaces.UseLeafletControllerParams.md#onlocationupdate)
- [options](interfaces.UseLeafletControllerParams.md#options)
- [properties](interfaces.UseLeafletControllerParams.md#properties)
- [tileLayer](interfaces.UseLeafletControllerParams.md#tilelayer)
- [zoom](interfaces.UseLeafletControllerParams.md#zoom)

## Properties

### center

• **center**: `LatLngExpression`

#### Defined in

src/interfaces.ts:7

___

### container

• **container**: `string`

#### Defined in

src/interfaces.ts:6

___

### location

• `Optional` **location**: `boolean`

#### Defined in

src/interfaces.ts:11

___

### onLocationUpdate

• `Optional` **onLocationUpdate**: (`e`: `LocationEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `LocationEvent` |

##### Returns

`void`

#### Defined in

src/interfaces.ts:12

___

### options

• `Optional` **options**: `MapOptions`

#### Defined in

src/interfaces.ts:10

___

### properties

• `Optional` **properties**: `T`

#### Defined in

src/interfaces.ts:13

___

### tileLayer

• `Optional` **tileLayer**: `string`

#### Defined in

src/interfaces.ts:9

___

### zoom

• **zoom**: `number`

#### Defined in

src/interfaces.ts:8
