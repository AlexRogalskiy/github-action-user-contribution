[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / src/utils/serializers

# Module: src/utils/serializers

## Table of contents

- [Functions](#functions-1)
  - [deserialize](#deserialize)
  - [serialize](#serialize)

## Functions

### deserialize

▸ `Const` **deserialize**(`obj`, `callback?`): `any`

#### Parameters

| Name        | Type                                       |
| :---------- | :----------------------------------------- |
| `obj`       | `string`                                   |
| `callback?` | (`key`: `string`, `value`: `any`) => `any` |

#### Returns

`any`

#### Defined in

[src/utils/serializers.ts:39](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/serializers.ts#L39)

***

### serialize

▸ `Const` **serialize**(`obj`, `space?`, `callback?`): `string`

#### Parameters

| Name        | Type                                       | Default value |
| :---------- | :----------------------------------------- | :------------ |
| `obj`       | `any`                                      | `undefined`   |
| `space`     | `number`                                   | `4`           |
| `callback?` | (`key`: `string`, `value`: `any`) => `any` | `undefined`   |

#### Returns

`string`

#### Defined in

[src/utils/serializers.ts:31](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/src/utils/serializers.ts#L31)
