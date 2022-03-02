[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / src/utils/commons

# Module: src/utils/commons

## Table of contents

### Functions

- [getEnumKeyByEnumValue](src_utils_commons.md#getenumkeybyenumvalue)
- [getUrlName](src_utils_commons.md#geturlname)
- [isInRange](src_utils_commons.md#isinrange)
- [mergeProps](src_utils_commons.md#mergeprops)
- [strToEnum](src_utils_commons.md#strtoenum)
- [toEnum](src_utils_commons.md#toenum)
- [toInt](src_utils_commons.md#toint)
- [toString](src_utils_commons.md#tostring)

## Functions

### getEnumKeyByEnumValue

▸ **getEnumKeyByEnumValue**(`myEnum`, `enumValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `myEnum` | `any` |
| `enumValue` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[src/utils/commons.ts:62](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L62)

___

### getUrlName

▸ `Const` **getUrlName**(`url`): [`Optional`](typings_standard_types.md#optional)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Optional`](typings_standard_types.md#optional)<`string`\>

#### Defined in

[src/utils/commons.ts:76](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L76)

___

### isInRange

▸ `Const` **isInRange**(`actual`, `min`, `max`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `number` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`boolean`

#### Defined in

[src/utils/commons.ts:68](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L68)

___

### mergeProps

▸ `Const` **mergeProps**<`T`\>(...`obj`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...obj` | `unknown`[] |

#### Returns

`T`

#### Defined in

[src/utils/commons.ts:37](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L37)

___

### strToEnum

▸ `Const` **strToEnum**<`T`\>(`values`): { [K in string]: K }

Utility function to create a K:V from a list of strings

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T`[] | initial input array to operate by |

#### Returns

{ [K in string]: K }

#### Defined in

[src/utils/commons.ts:46](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L46)

___

### toEnum

▸ `Const` **toEnum**<`T`, `V`\>(`values`, `func?`): { [K in string]: V }

Utility function to create a K:V from a list of strings

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T`[] | initial input array to operate by |
| `func?` | (`v`: `T`) => `V` | initial input function |

#### Returns

{ [K in string]: V }

#### Defined in

[src/utils/commons.ts:55](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L55)

___

### toInt

▸ `Const` **toInt**(`str`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`number`

#### Defined in

[src/utils/commons.ts:72](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L72)

___

### toString

▸ `Const` **toString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `string`[] |

#### Returns

`string`

#### Defined in

[src/utils/commons.ts:35](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/commons.ts#L35)
