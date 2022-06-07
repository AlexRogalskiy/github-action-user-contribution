[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / src/utils/commons

# Module: src/utils/commons

## Table of contents

- [Functions](#functions-1)
  - [getEnumKeyByEnumValue](#getenumkeybyenumvalue)
  - [getUrlName](#geturlname)
  - [isInRange](#isinrange)
  - [mergeProps](#mergeprops)
  - [strToEnum](#strtoenum)
  - [toEnum](#toenum)
  - [toInt](#toint)
  - [toString](#tostring)

## Functions

### getEnumKeyByEnumValue

▸ **getEnumKeyByEnumValue**(`myEnum`, `enumValue`): `string`

#### Parameters

| Name        | Type                 |
| :---------- | :------------------- |
| `myEnum`    | `any`                |
| `enumValue` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[src/utils/commons.ts:62](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L62)

***

### getUrlName

▸ `Const` **getUrlName**(`url`): [`Optional`](typings_standard_types.md#optional)<`string`>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `url` | `string` |

#### Returns

[`Optional`](typings_standard_types.md#optional)<`string`>

#### Defined in

[src/utils/commons.ts:76](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L76)

***

### isInRange

▸ `Const` **isInRange**(`actual`, `min`, `max`): `boolean`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `actual` | `number` |
| `min`    | `number` |
| `max`    | `number` |

#### Returns

`boolean`

#### Defined in

[src/utils/commons.ts:68](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L68)

***

### mergeProps

▸ `Const` **mergeProps**<`T`>(...`obj`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type        |
| :------- | :---------- |
| `...obj` | `unknown`[] |

#### Returns

`T`

#### Defined in

[src/utils/commons.ts:37](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L37)

***

### strToEnum

▸ `Const` **strToEnum**<`T`>(`values`): { \[K in string]: K }

Utility function to create a K:V from a list of strings

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `string` |

#### Parameters

| Name     | Type  | Description                       |
| :------- | :---- | :-------------------------------- |
| `values` | `T`[] | initial input array to operate by |

#### Returns

{ \[K in string]: K }

#### Defined in

[src/utils/commons.ts:46](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L46)

***

### toEnum

▸ `Const` **toEnum**<`T`, `V`>(`values`, `func?`): { \[K in string]: V }

Utility function to create a K:V from a list of strings

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `string` |
| `V`  | `V`              |

#### Parameters

| Name     | Type              | Description                       |
| :------- | :---------------- | :-------------------------------- |
| `values` | `T`[]             | initial input array to operate by |
| `func?`  | (`v`: `T`) => `V` | initial input function            |

#### Returns

{ \[K in string]: V }

#### Defined in

[src/utils/commons.ts:55](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L55)

***

### toInt

▸ `Const` **toInt**(`str`): `number`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`number`

#### Defined in

[src/utils/commons.ts:72](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L72)

***

### toString

▸ `Const` **toString**(`value`): `string`

#### Parameters

| Name    | Type                   |
| :------ | :--------------------- |
| `value` | `string` \| `string`[] |

#### Returns

`string`

#### Defined in

[src/utils/commons.ts:35](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L35)
