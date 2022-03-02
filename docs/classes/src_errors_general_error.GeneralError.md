[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / [src/errors/general.error](../modules/src_errors_general_error.md) / GeneralError

# Class: GeneralError

[src/errors/general.error](../modules/src_errors_general_error.md).GeneralError

GeneralError

**`description`** Class representing general error

## Hierarchy

- [`ExtendableError`](src_errors_extendable_error.ExtendableError.md)

  ↳ **`GeneralError`**

  ↳↳ [`ResponseError`](src_errors_response_error.ResponseError.md)

  ↳↳ [`ValueError`](src_errors_value_error.ValueError.md)

## Table of contents

### Constructors

- [constructor](src_errors_general_error.GeneralError.md#constructor)

### Properties

- [args](src_errors_general_error.GeneralError.md#args)
- [message](src_errors_general_error.GeneralError.md#message)
- [name](src_errors_general_error.GeneralError.md#name)
- [stack](src_errors_general_error.GeneralError.md#stack)
- [type](src_errors_general_error.GeneralError.md#type)
- [stackTraceLimit](src_errors_general_error.GeneralError.md#stacktracelimit)

### Methods

- [captureStackTrace](src_errors_general_error.GeneralError.md#capturestacktrace)
- [prepareStackTrace](src_errors_general_error.GeneralError.md#preparestacktrace)

## Constructors

### constructor

• **new GeneralError**(`type`, `message`, ...`args`)

General error constructor by input parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`ErrorType`](../enums/typings_enum_types.ErrorType.md) | initial input [ErrorType](../enums/typings_enum_types.ErrorType.md) |
| `message` | `string` | initial input {@link string} message |
| `...args` | `any`[] | initial input {@link Array} of arguments |

#### Overrides

[ExtendableError](src_errors_extendable_error.ExtendableError.md).[constructor](src_errors_extendable_error.ExtendableError.md#constructor)

#### Defined in

[src/errors/general.error.ts:51](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/errors/general.error.ts#L51)

## Properties

### args

• `Readonly` **args**: `any`[] = `[]`

Error arguments

#### Defined in

[src/errors/general.error.ts:43](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/errors/general.error.ts#L43)

___

### message

• `Readonly` **message**: `string`

#### Inherited from

[ExtendableError](src_errors_extendable_error.ExtendableError.md).[message](src_errors_extendable_error.ExtendableError.md#message)

___

### name

• **name**: `string`

#### Inherited from

[ExtendableError](src_errors_extendable_error.ExtendableError.md).[name](src_errors_extendable_error.ExtendableError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ExtendableError](src_errors_extendable_error.ExtendableError.md).[stack](src_errors_extendable_error.ExtendableError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### type

• `Readonly` **type**: [`ErrorType`](../enums/typings_enum_types.ErrorType.md)

#### Inherited from

[ExtendableError](src_errors_extendable_error.ExtendableError.md).[type](src_errors_extendable_error.ExtendableError.md#type)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[ExtendableError](src_errors_extendable_error.ExtendableError.md).[stackTraceLimit](src_errors_extendable_error.ExtendableError.md#stacktracelimit)

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

[ExtendableError](src_errors_extendable_error.ExtendableError.md).[captureStackTrace](src_errors_extendable_error.ExtendableError.md#capturestacktrace)

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

[ExtendableError](src_errors_extendable_error.ExtendableError.md).[prepareStackTrace](src_errors_extendable_error.ExtendableError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11
