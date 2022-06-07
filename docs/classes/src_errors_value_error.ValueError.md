[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / [src/errors/value.error](../modules/src_errors_value_error.md) / ValueError

# Class: ValueError

[src/errors/value.error](../modules/src_errors_value_error.md).ValueError

ValueError

**`description`** Class representing value error

## Hierarchy

- [`GeneralError`](src_errors_general_error.GeneralError.md)

  ↳ **`ValueError`**

## Table of contents

### Constructors

- [constructor](src_errors_value_error.ValueError.md#constructor)

### Properties

- [args](src_errors_value_error.ValueError.md#args)
- [message](src_errors_value_error.ValueError.md#message)
- [name](src_errors_value_error.ValueError.md#name)
- [stack](src_errors_value_error.ValueError.md#stack)
- [type](src_errors_value_error.ValueError.md#type)
- [stackTraceLimit](src_errors_value_error.ValueError.md#stacktracelimit)

### Methods

- [captureStackTrace](src_errors_value_error.ValueError.md#capturestacktrace)
- [prepareStackTrace](src_errors_value_error.ValueError.md#preparestacktrace)

## Constructors

### constructor

• **new ValueError**(`message`, ...`args`)

Value error constructor by input parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | initial input {@link string} message |
| `...args` | `any`[] | initial input {@link Array} of arguments |

#### Overrides

[GeneralError](src_errors_general_error.GeneralError.md).[constructor](src_errors_general_error.GeneralError.md#constructor)

#### Defined in

[src/errors/value.error.ts:45](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/errors/value.error.ts#L45)

## Properties

### args

• `Readonly` **args**: `any`[] = `[]`

Error arguments

#### Inherited from

[GeneralError](src_errors_general_error.GeneralError.md).[args](src_errors_general_error.GeneralError.md#args)

#### Defined in

[src/errors/general.error.ts:43](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/errors/general.error.ts#L43)

___

### message

• `Readonly` **message**: `string`

#### Inherited from

[GeneralError](src_errors_general_error.GeneralError.md).[message](src_errors_general_error.GeneralError.md#message)

___

### name

• **name**: `string`

#### Inherited from

[GeneralError](src_errors_general_error.GeneralError.md).[name](src_errors_general_error.GeneralError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[GeneralError](src_errors_general_error.GeneralError.md).[stack](src_errors_general_error.GeneralError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### type

• `Readonly` **type**: [`ErrorType`](../enums/typings_enum_types.ErrorType.md)

#### Inherited from

[GeneralError](src_errors_general_error.GeneralError.md).[type](src_errors_general_error.GeneralError.md#type)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[GeneralError](src_errors_general_error.GeneralError.md).[stackTraceLimit](src_errors_general_error.GeneralError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[GeneralError](src_errors_general_error.GeneralError.md).[captureStackTrace](src_errors_general_error.GeneralError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4

___

### prepareStackTrace

▸ `Static` `Optional` **prepareStackTrace**(`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

#### Returns

`any`

#### Inherited from

[GeneralError](src_errors_general_error.GeneralError.md).[prepareStackTrace](src_errors_general_error.GeneralError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11
