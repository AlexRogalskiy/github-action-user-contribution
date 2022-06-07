[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / [src/errors/extendable.error](../modules/src_errors_extendable_error.md) / ExtendableError

# Class: ExtendableError

[src/errors/extendable.error](../modules/src_errors_extendable_error.md).ExtendableError

ExtendableError

**`description`** Class representing extendable error

## Hierarchy

- `Error`

  ↳ **`ExtendableError`**

  ↳↳ [`GeneralError`](src_errors_general_error.GeneralError.md)

## Table of contents

### Constructors

- [constructor](src_errors_extendable_error.ExtendableError.md#constructor)

### Properties

- [message](src_errors_extendable_error.ExtendableError.md#message)
- [name](src_errors_extendable_error.ExtendableError.md#name)
- [stack](src_errors_extendable_error.ExtendableError.md#stack)
- [type](src_errors_extendable_error.ExtendableError.md#type)
- [stackTraceLimit](src_errors_extendable_error.ExtendableError.md#stacktracelimit)

### Methods

- [captureStackTrace](src_errors_extendable_error.ExtendableError.md#capturestacktrace)
- [prepareStackTrace](src_errors_extendable_error.ExtendableError.md#preparestacktrace)

## Constructors

### constructor

• **new ExtendableError**(`type`, `message`)

Extendable error constructor by input parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`ErrorType`](../enums/typings_enum_types.ErrorType.md) | initial input [ErrorType](../enums/typings_enum_types.ErrorType.md) |
| `message` | `string` | initial input {@link string} message |

#### Overrides

Error.constructor

#### Defined in

[src/errors/extendable.error.ts:45](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/errors/extendable.error.ts#L45)

## Properties

### message

• `Readonly` **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### type

• `Readonly` **type**: [`ErrorType`](../enums/typings_enum_types.ErrorType.md)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11
