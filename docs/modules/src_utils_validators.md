[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / src/utils/validators

# Module: src/utils/validators

## Table of contents

- [Functions](#functions-1)
  - [getType](#gettype)
  - [hasProperty](#hasproperty)
  - [isArray](#isarray)
  - [isBlankString](#isblankstring)
  - [isFunction](#isfunction)
  - [isNotNull](#isnotnull)
  - [isNotUndefined](#isnotundefined)
  - [isNull](#isnull)
  - [isNullOrUndefined](#isnullorundefined)
  - [isNumber](#isnumber)
  - [isObject](#isobject)
  - [isString](#isstring)
  - [isUndefined](#isundefined)
  - [isValidFile](#isvalidfile)
  - [isValidUrl](#isvalidurl)

## Functions

### getType

▸ `Const` **getType**(`obj`): [`Optional`](typings_standard_types.md#optional)<`string`>

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `obj` | `any` |

#### Returns

[`Optional`](typings_standard_types.md#optional)<`string`>

#### Defined in

[src/utils/validators.ts:35](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L35)

***

### hasProperty

▸ `Const` **hasProperty**(`obj`, `prop`): `boolean`

Returns a boolean indicating whether the object has the specified property.

#### Parameters

| Name   | Type                                                            | Description      |
| :----- | :-------------------------------------------------------------- | :--------------- |
| `obj`  | `any`                                                           | n object.        |
| `prop` | [`Optional`](typings_standard_types.md#optional)<`PropertyKey`> | A property name. |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:98](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L98)

***

### isArray

▸ `Const` **isArray**(`value`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:66](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L66)

***

### isBlankString

▸ `Const` **isBlankString**(`value`): `boolean`

#### Parameters

| Name    | Type                                                       |
| :------ | :--------------------------------------------------------- |
| `value` | [`Optional`](typings_standard_types.md#optional)<`string`> |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:105](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L105)

***

### isFunction

▸ `Const` **isFunction**(`value`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:75](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L75)

***

### isNotNull

▸ `Const` **isNotNull**(`value`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:54](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L54)

***

### isNotUndefined

▸ `Const` **isNotUndefined**(`value`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:58](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L58)

***

### isNull

▸ `Const` **isNull**(`value`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:42](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L42)

***

### isNullOrUndefined

▸ `Const` **isNullOrUndefined**(`value`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:50](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L50)

***

### isNumber

▸ `Const` **isNumber**(`value`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:84](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L84)

***

### isObject

▸ `Const` **isObject**(`value`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:71](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L71)

***

### isString

▸ `Const` **isString**(`value`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:62](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L62)

***

### isUndefined

▸ `Const` **isUndefined**(`value`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:46](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L46)

***

### isValidFile

▸ `Const` **isValidFile**(`fileName`, `extension?`): `boolean`

#### Parameters

| Name        | Type     | Default value |
| :---------- | :------- | :------------ |
| `fileName`  | `string` | `undefined`   |
| `extension` | `string` | `''`          |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:109](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L109)

***

### isValidUrl

▸ `Const` **isValidUrl**(`value`): `boolean`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:113](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L113)
