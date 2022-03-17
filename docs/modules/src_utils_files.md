[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / src/utils/files

# Module: src/utils/files

## Table of contents

- [Functions](#functions-1)
  - [createWritableStream](#createwritablestream)
  - [ensureDirExists](#ensuredirexists)
  - [getFilesizeInBytes](#getfilesizeinbytes)
  - [getSizeInBytes](#getsizeinbytes)
  - [getSizeInBytesAsync](#getsizeinbytesasync)
  - [isFileExists](#isfileexists)
  - [storeData](#storedata)

## Functions

### createWritableStream

▸ `Const` **createWritableStream**(`filename`): `WriteStream`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `filename` | `string` |

#### Returns

`WriteStream`

#### Defined in

[src/utils/files.ts:93](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/files.ts#L93)

***

### ensureDirExists

▸ `Const` **ensureDirExists**(`dir`, `options?`): `void`

#### Parameters

| Name      | Type                   |
| :-------- | :--------------------- |
| `dir`     | `string`               |
| `options` | `MakeDirectoryOptions` |

#### Returns

`void`

#### Defined in

[src/utils/files.ts:50](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/files.ts#L50)

***

### getFilesizeInBytes

▸ `Const` **getFilesizeInBytes**(`filename`): `number`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `filename` | `string` |

#### Returns

`number`

#### Defined in

[src/utils/files.ts:54](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/files.ts#L54)

***

### getSizeInBytes

▸ `Const` **getSizeInBytes**(`filename`): `number`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `filename` | `string` |

#### Returns

`number`

#### Defined in

[src/utils/files.ts:89](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/files.ts#L89)

***

### getSizeInBytesAsync

▸ `Const` **getSizeInBytesAsync**(`filename`): `Promise`<`number`>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `filename` | `string` |

#### Returns

`Promise`<`number`>

#### Defined in

[src/utils/files.ts:85](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/files.ts#L85)

***

### isFileExists

▸ `Const` **isFileExists**(`fileName`, `mode?`): `boolean`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `fileName` | `string` |
| `mode`     | `number` |

#### Returns

`boolean`

#### Defined in

[src/utils/files.ts:75](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/files.ts#L75)

***

### storeData

▸ `Const` **storeData**(`filePath`, `fileName`, `data`): `string`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `filePath` | `string` |
| `fileName` | `string` |
| `data`     | `any`    |

#### Returns

`string`

#### Defined in

[src/utils/files.ts:59](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/files.ts#L59)
