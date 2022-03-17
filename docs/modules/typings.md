[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / typings

# Module: typings

## Table of contents

- [Functions](#functions-1)
  - [charset](#charset)
  - [charsets](#charsets)
  - [encoding](#encoding)
  - [encodings](#encodings)
  - [language](#language)
  - [languages](#languages)
  - [mediaType](#mediatype)
  - [mediaTypes](#mediatypes)
  - [parseAll](#parseall)

## Functions

### charset

▸ **charset**(`charsetHeader?`, `preferences?`): `string`

#### Parameters

| Name             | Type       |
| :--------------- | :--------- |
| `charsetHeader?` | `string`   |
| `preferences?`   | `string`[] |

#### Returns

`string`

#### Defined in

[typings/index.d.ts:31](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/index.d.ts#L31)

***

### charsets

▸ **charsets**(`charsetHeader?`): `string`\[]

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `charsetHeader?` | `string` |

#### Returns

`string`\[]

#### Defined in

[typings/index.d.ts:33](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/index.d.ts#L33)

***

### encoding

▸ **encoding**(`encodingHeader?`, `preferences?`): `string`

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `encodingHeader?` | `string`   |
| `preferences?`    | `string`[] |

#### Returns

`string`

#### Defined in

[typings/index.d.ts:35](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/index.d.ts#L35)

***

### encodings

▸ **encodings**(`encodingHeader?`): `string`\[]

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `encodingHeader?` | `string` |

#### Returns

`string`\[]

#### Defined in

[typings/index.d.ts:37](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/index.d.ts#L37)

***

### language

▸ **language**(`languageHeader?`, `preferences?`): `string`

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `languageHeader?` | `string`   |
| `preferences?`    | `string`[] |

#### Returns

`string`

#### Defined in

[typings/index.d.ts:39](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/index.d.ts#L39)

***

### languages

▸ **languages**(`languageHeader?`): `string`\[]

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `languageHeader?` | `string` |

#### Returns

`string`\[]

#### Defined in

[typings/index.d.ts:41](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/index.d.ts#L41)

***

### mediaType

▸ **mediaType**(`mediaTypeHeader?`, `preferences?`): `string`

#### Parameters

| Name               | Type       |
| :----------------- | :--------- |
| `mediaTypeHeader?` | `string`   |
| `preferences?`     | `string`[] |

#### Returns

`string`

#### Defined in

[typings/index.d.ts:43](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/index.d.ts#L43)

***

### mediaTypes

▸ **mediaTypes**(`mediaTypeHeader?`): `string`\[]

#### Parameters

| Name               | Type     |
| :----------------- | :------- |
| `mediaTypeHeader?` | `string` |

#### Returns

`string`\[]

#### Defined in

[typings/index.d.ts:45](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/index.d.ts#L45)

***

### parseAll

▸ **parseAll**(`headers`): `Object`

#### Parameters

| Name      | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `headers` | `Record`<`string`, `undefined` \| `string` \| `string`[]> |

#### Returns

`Object`

| Name         | Type       |
| :----------- | :--------- |
| `charsets`   | `string`[] |
| `encodings`  | `string`[] |
| `languages`  | `string`[] |
| `mediaTypes` | `string`[] |

#### Defined in

[typings/index.d.ts:47](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/index.d.ts#L47)
