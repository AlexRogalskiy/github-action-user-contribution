[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / typings/standard-types

# Module: typings/standard-types

## Table of contents

- [Type aliases](#type-aliases-1)
  - [Keys](#keys)
  - [Optional](#optional)
  - [Processor](#processor)

## Type aliases

### Keys

Ƭ **Keys**<`T`>: keyof `T`

Keys

**`description`** Type representing \[`Keys`] in TypeScript: `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[typings/standard-types.ts:41](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/standard-types.ts#L41)

***

### Optional

Ƭ **Optional**<`T`>: `T` | `null` | `undefined`

Optional

**`description`** Type representing \[`Optional`] in TypeScript: `T | null | undefined`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[typings/standard-types.ts:35](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/standard-types.ts#L35)

***

### Processor

Ƭ **Processor**<`T`, `V`>: (`v`: `T`) => `V`

#### Type parameters

| Name |
| :--- |
| `T`  |
| `V`  |

#### Type declaration

▸ (`v`): `V`

Processor

**`description`** Type representing processor function type in TypeScript

**`example`**
type Processor = (v) => return new String(v)

##### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

##### Returns

`V`

#### Defined in

[typings/standard-types.ts:49](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/standard-types.ts#L49)
