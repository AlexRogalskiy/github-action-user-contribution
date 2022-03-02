[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / src/utils/loggers

# Module: src/utils/loggers

## Table of contents

### Functions

- [boxenDebugLogs](src_utils_loggers.md#boxendebuglogs)
- [boxenErrorLogs](src_utils_loggers.md#boxenerrorlogs)
- [boxenLogs](src_utils_loggers.md#boxenlogs)
- [boxenTraceLogs](src_utils_loggers.md#boxentracelogs)
- [boxenWarnLogs](src_utils_loggers.md#boxenwarnlogs)
- [coreDebug](src_utils_loggers.md#coredebug)
- [coreError](src_utils_loggers.md#coreerror)
- [coreInfo](src_utils_loggers.md#coreinfo)
- [createLogger](src_utils_loggers.md#createlogger)
- [debugLogs](src_utils_loggers.md#debuglogs)
- [errorLogs](src_utils_loggers.md#errorlogs)
- [handleError](src_utils_loggers.md#handleerror)
- [logArrayElements](src_utils_loggers.md#logarrayelements)
- [logs](src_utils_loggers.md#logs)
- [toLog](src_utils_loggers.md#tolog)
- [traceLogs](src_utils_loggers.md#tracelogs)
- [warnLogs](src_utils_loggers.md#warnlogs)

## Functions

### boxenDebugLogs

▸ `Const` **boxenDebugLogs**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:118](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L118)

___

### boxenErrorLogs

▸ `Const` **boxenErrorLogs**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:106](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L106)

___

### boxenLogs

▸ `Const` **boxenLogs**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:104](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L104)

___

### boxenTraceLogs

▸ `Const` **boxenTraceLogs**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:121](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L121)

___

### boxenWarnLogs

▸ `Const` **boxenWarnLogs**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:115](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L115)

___

### coreDebug

▸ `Const` **coreDebug**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:129](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L129)

___

### coreError

▸ `Const` **coreError**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| `Error` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:127](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L127)

___

### coreInfo

▸ `Const` **coreInfo**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:125](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L125)

___

### createLogger

▸ `Const` **createLogger**<`T`\>(`logger`, `processor?`): `Logger`<`T`, `any`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `Logger`<`T`, `any`\> |
| `processor?` | [`Processor`](typings_standard_types.md#processor)<`T`, `T`\> |

#### Returns

`Logger`<`T`, `any`\>

#### Defined in

[src/utils/loggers.ts:82](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L82)

___

### debugLogs

▸ `Const` **debugLogs**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:97](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L97)

___

### errorLogs

▸ `Const` **errorLogs**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:91](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L91)

___

### handleError

▸ `Const` **handleError**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:135](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L135)

___

### logArrayElements

▸ `Const` **logArrayElements**<`T`\>(`index`, `array`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `array` | `T`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:131](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L131)

___

### logs

▸ `Const` **logs**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:88](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L88)

___

### toLog

▸ `Const` **toLog**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:76](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L76)

___

### traceLogs

▸ `Const` **traceLogs**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:100](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L100)

___

### warnLogs

▸ `Const` **warnLogs**(`message`, ...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/utils/loggers.ts:94](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/loggers.ts#L94)
