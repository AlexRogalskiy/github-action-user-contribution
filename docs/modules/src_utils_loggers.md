[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / src/utils/loggers

# Module: src/utils/loggers

## Table of contents

- [Functions](#functions-1)
  - [boxenDebugLogs](#boxendebuglogs)
  - [boxenErrorLogs](#boxenerrorlogs)
  - [boxenLogs](#boxenlogs)
  - [boxenTraceLogs](#boxentracelogs)
  - [boxenWarnLogs](#boxenwarnlogs)
  - [coreDebug](#coredebug)
  - [coreError](#coreerror)
  - [coreInfo](#coreinfo)
  - [createLogger](#createlogger)
  - [debugLogs](#debuglogs)
  - [errorLogs](#errorlogs)
  - [handleError](#handleerror)
  - [logArrayElements](#logarrayelements)
  - [logs](#logs)
  - [toLog](#tolog)
  - [traceLogs](#tracelogs)
  - [warnLogs](#warnlogs)

## Functions

### boxenDebugLogs

▸ `Const` **boxenDebugLogs**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `message` | `any`   |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:118](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L118)

***

### boxenErrorLogs

▸ `Const` **boxenErrorLogs**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `message` | `any`   |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:106](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L106)

***

### boxenLogs

▸ `Const` **boxenLogs**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `message` | `any`   |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:104](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L104)

***

### boxenTraceLogs

▸ `Const` **boxenTraceLogs**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `message` | `any`   |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:121](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L121)

***

### boxenWarnLogs

▸ `Const` **boxenWarnLogs**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `message` | `any`   |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:115](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L115)

***

### coreDebug

▸ `Const` **coreDebug**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `message` | `string` |
| `...args` | `any`[]  |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:129](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L129)

***

### coreError

▸ `Const` **coreError**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type                |
| :-------- | :------------------ |
| `message` | `string` \| `Error` |
| `...args` | `any`[]             |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:127](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L127)

***

### coreInfo

▸ `Const` **coreInfo**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `message` | `string` |
| `...args` | `any`[]  |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:125](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L125)

***

### createLogger

▸ `Const` **createLogger**<`T`>(`logger`, `processor?`): `Logger`<`T`, `any`>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                         |
| :----------- | :----------------------------------------------------------- |
| `logger`     | `Logger`<`T`, `any`>                                         |
| `processor?` | [`Processor`](typings_standard_types.md#processor)<`T`, `T`> |

#### Returns

`Logger`<`T`, `any`>

#### Defined in

[src/utils/loggers.ts:82](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L82)

***

### debugLogs

▸ `Const` **debugLogs**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `message` | `unknown` |
| `...args` | `any`[]   |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:97](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L97)

***

### errorLogs

▸ `Const` **errorLogs**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `message` | `unknown` |
| `...args` | `any`[]   |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:91](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L91)

***

### handleError

▸ `Const` **handleError**(`err`): `void`

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `err` | `any` |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:135](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L135)

***

### logArrayElements

▸ `Const` **logArrayElements**<`T`>(`index`, `array`): `void`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `index` | `number` |
| `array` | `T`[]    |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:131](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L131)

***

### logs

▸ `Const` **logs**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `message` | `unknown` |
| `...args` | `any`[]   |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:88](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L88)

***

### toLog

▸ `Const` **toLog**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `message` | `string` |
| `...args` | `any`[]  |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:76](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L76)

***

### traceLogs

▸ `Const` **traceLogs**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `message` | `unknown` |
| `...args` | `any`[]   |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:100](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L100)

***

### warnLogs

▸ `Const` **warnLogs**(`message`, ...`args`): `void`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `message` | `unknown` |
| `...args` | `any`[]   |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:94](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L94)
