[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / src/utils/validators

# Module: src/utils/validators

## Table of contents

### Functions

- [getType](src_utils_validators.md#gettype)
- [hasProperty](src_utils_validators.md#hasproperty)
- [isArray](src_utils_validators.md#isarray)
- [isBlankString](src_utils_validators.md#isblankstring)
- [isFunction](src_utils_validators.md#isfunction)
- [isNotNull](src_utils_validators.md#isnotnull)
- [isNotUndefined](src_utils_validators.md#isnotundefined)
- [isNull](src_utils_validators.md#isnull)
- [isNullOrUndefined](src_utils_validators.md#isnullorundefined)
- [isNumber](src_utils_validators.md#isnumber)
- [isObject](src_utils_validators.md#isobject)
- [isString](src_utils_validators.md#isstring)
- [isUndefined](src_utils_validators.md#isundefined)
- [isValidFile](src_utils_validators.md#isvalidfile)
- [isValidUrl](src_utils_validators.md#isvalidurl)

## Functions

### getType

▸ `Const` **getType**(`obj`): [`Optional`](typings_standard_types.md#optional)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

[`Optional`](typings_standard_types.md#optional)<`string`\>

#### Defined in

[src/utils/validators.ts:35](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L35)

___

### hasProperty

▸ `Const` **hasProperty**(`obj`, `prop`): `boolean`

Returns a boolean indicating whether the object has the specified property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | n object. |
| `prop` | [`Optional`](typings_standard_types.md#optional)<`PropertyKey`\> | A property name. |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:98](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L98)

___

### isArray

▸ `Const` **isArray**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:66](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L66)

___

### isBlankString

▸ `Const` **isBlankString**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Optional`](typings_standard_types.md#optional)<`string`\> |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:105](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L105)

___

### isFunction

▸ `Const` **isFunction**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:75](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L75)

___

### isNotNull

▸ `Const` **isNotNull**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:54](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L54)

___

### isNotUndefined

▸ `Const` **isNotUndefined**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:58](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L58)

___

### isNull

▸ `Const` **isNull**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:42](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L42)

___

### isNullOrUndefined

▸ `Const` **isNullOrUndefined**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:50](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L50)

___

### isNumber

▸ `Const` **isNumber**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:84](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L84)

___

### isObject

▸ `Const` **isObject**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:71](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L71)

___

### isString

▸ `Const` **isString**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:62](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L62)

___

### isUndefined

▸ `Const` **isUndefined**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:46](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L46)

___

### isValidFile

▸ `Const` **isValidFile**(`fileName`, `extension?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fileName` | `string` | `undefined` |
| `extension` | `string` | `''` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:109](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L109)

___

### isValidUrl

▸ `Const` **isValidUrl**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/validators.ts:113](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/validators.ts#L113)
