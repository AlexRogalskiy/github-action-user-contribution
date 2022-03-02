[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / src/utils/requests

# Module: src/utils/requests

## Table of contents

### Functions

- [fetchAsJson](src_utils_requests.md#fetchasjson)
- [fetchAsText](src_utils_requests.md#fetchastext)
- [toBase64ImageUrl](src_utils_requests.md#tobase64imageurl)

## Functions

### fetchAsJson

▸ `Const` **fetchAsJson**(`url`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options` | `RequestInit` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/utils/requests.ts:46](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/requests.ts#L46)

___

### fetchAsText

▸ `Const` **fetchAsText**(`url`, `options?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options` | `RequestInit` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/utils/requests.ts:58](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/requests.ts#L58)

___

### toBase64ImageUrl

▸ `Const` **toBase64ImageUrl**(`url`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/utils/requests.ts:70](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/requests.ts#L70)
