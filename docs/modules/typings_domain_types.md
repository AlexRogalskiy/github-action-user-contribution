[GitHub action for GitHub user contribution charts](../README.md) / [Modules](../modules.md) / typings/domain-types

# Module: typings/domain-types

## Table of contents

### Type aliases

- [AccountOptions](typings_domain_types.md#accountoptions)
- [ChartOptions](typings_domain_types.md#chartoptions)
- [ColorOptions](typings_domain_types.md#coloroptions)
- [ColorPalette](typings_domain_types.md#colorpalette)
- [ColorScheme](typings_domain_types.md#colorscheme)
- [ConfigOptions](typings_domain_types.md#configoptions)
- [ContributionGraphData](typings_domain_types.md#contributiongraphdata)
- [DateRange](typings_domain_types.md#daterange)
- [GraphDataItem](typings_domain_types.md#graphdataitem)
- [Pair](typings_domain_types.md#pair)
- [Position](typings_domain_types.md#position)
- [ProfileOptions](typings_domain_types.md#profileoptions)
- [RequestInfo](typings_domain_types.md#requestinfo)
- [RequestOptions](typings_domain_types.md#requestoptions)
- [ResourceOptions](typings_domain_types.md#resourceoptions)
- [StyleOptions](typings_domain_types.md#styleoptions)

## Type aliases

### AccountOptions

Ƭ **AccountOptions**: `Object`

RepoOptions

**`description`** Type representing repository options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateRange` | [`DateRange`](typings_domain_types.md#daterange) | Date range |
| `userName` | `string` | GitHub username |

#### Defined in

[typings/domain-types.ts:145](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L145)

___

### ChartOptions

Ƭ **ChartOptions**: `Object`

ChartOptions

**`description`** Type representing chart options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chartType` | [`ChartType`](../enums/typings_enum_types.ChartType.md) | Chart type options |

#### Defined in

[typings/domain-types.ts:117](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L117)

___

### ColorOptions

Ƭ **ColorOptions**: `Object`

ColorOptions

**`description`** Type representing color options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorScheme` | [`ColorSchemeType`](../enums/typings_enum_types.ColorSchemeType.md) | Color scheme options |

#### Defined in

[typings/domain-types.ts:105](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L105)

___

### ColorPalette

Ƭ **ColorPalette**: `string`[]

ColorPalette

**`description`** Type representing color palette

#### Defined in

[typings/domain-types.ts:63](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L63)

___

### ColorScheme

Ƭ **ColorScheme**: `Record`<[`ColorSchemeType`](../enums/typings_enum_types.ColorSchemeType.md), [`ColorPalette`](typings_domain_types.md#colorpalette)\>

ColorScheme

**`description`** Type representing color scheme

#### Defined in

[typings/domain-types.ts:70](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L70)

___

### ConfigOptions

Ƭ **ConfigOptions**: `Object`

ConfigOptions

**`description`** Type representing configuration options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountOptions` | [`AccountOptions`](typings_domain_types.md#accountoptions) | Account configuration options |
| `chartOptions` | [`ChartOptions`](typings_domain_types.md#chartoptions) | Chart configuration options |
| `colorOptions` | [`ColorOptions`](typings_domain_types.md#coloroptions) | Color configuration options |
| `resourceOptions` | [`ResourceOptions`](typings_domain_types.md#resourceoptions) | Resource configuration options |

#### Defined in

[typings/domain-types.ts:39](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L39)

___

### ContributionGraphData

Ƭ **ContributionGraphData**: `Object`

ContributionGraphData

**`description`** Type representing user contribution graph data

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cells` | [`GraphDataItem`](typings_domain_types.md#graphdataitem)[] | Contribution cell data |
| `colorPalette` | [`ColorPalette`](typings_domain_types.md#colorpalette) | Color palette |

#### Defined in

[typings/domain-types.ts:221](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L221)

___

### DateRange

Ƭ **DateRange**: { `from?`: `string` \| `Date` ; `to?`: `string` \| `Date`  } \| { `year?`: `number`  }

DateRange

**`description`** Type representing date range

#### Defined in

[typings/domain-types.ts:265](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L265)

___

### GraphDataItem

Ƭ **GraphDataItem**: `Object`

GraphDataItem

**`description`** Type representing contribution graph data item

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | Contribution color |
| `count` | `number` | Contribution count |
| `date` | `string` | Contribution date |
| `x` | `number` | Contribution X-graph coordinate |
| `y` | `number` | Contribution Y-graph coordinate |

#### Defined in

[typings/domain-types.ts:237](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L237)

___

### Pair

Ƭ **Pair**<`K`, `V`\>: `Object`

Pair

**`description`** Type representing pair

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Defined in

[typings/domain-types.ts:277](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L277)

___

### Position

Ƭ **Position**: `Object`

Position

**`description`** Type representing position

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | X-position coordinate |
| `y` | `number` | X-position coordinate |

#### Defined in

[typings/domain-types.ts:205](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L205)

___

### ProfileOptions

Ƭ **ProfileOptions**: `Object`

ProfileOptions

**`description`** Type representing profiles options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chartOptions` | [`ChartOptions`](typings_domain_types.md#chartoptions) | Chart configuration options |
| `colorOptions` | [`ColorOptions`](typings_domain_types.md#coloroptions) | Color configuration options |
| `outputOptions?` | `boxen.Options` | Output configuration options |
| `requestOptions` | [`RequestOptions`](typings_domain_types.md#requestoptions) | Request configuration options |
| `resourceOptions` | [`ResourceOptions`](typings_domain_types.md#resourceoptions) | Resource configuration options |

#### Defined in

[typings/domain-types.ts:177](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L177)

___

### RequestInfo

Ƭ **RequestInfo**: `Object`

RequestInfo

**`description`** Type representing request info

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | Request url |

#### Defined in

[typings/domain-types.ts:93](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L93)

___

### RequestOptions

Ƭ **RequestOptions**: `Object`

RequestOptions

**`description`** Type representing request options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chartRequest` | `Readonly`<[`RequestInfo`](typings_domain_types.md#requestinfo)\> | Chart request info |
| `githubRequest` | `Readonly`<[`RequestInfo`](typings_domain_types.md#requestinfo)\> | GitHub request info |

#### Defined in

[typings/domain-types.ts:77](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L77)

___

### ResourceOptions

Ƭ **ResourceOptions**: `Object`

ResourceOptions

**`description`** Type representing resource options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | File name |
| `filePath` | `string` | File path |

#### Defined in

[typings/domain-types.ts:161](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L161)

___

### StyleOptions

Ƭ **StyleOptions**: `Object`

StyleOptions

**`description`** Type representing style options

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `layout` | `string` | Style layout |
| `theme` | `string` | Style theme |

#### Defined in

[typings/domain-types.ts:129](https://github.com/AlexRogalskiy/github-action-user-contribution/blob/8736815/typings/domain-types.ts#L129)
