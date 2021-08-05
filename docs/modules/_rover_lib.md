[Rover](../README.md) / [Exports](../modules.md) / @rover/lib

# Module: @rover/lib

## Table of contents

### Interfaces

- [Fetch](../interfaces/_rover_lib.Fetch.md)
- [Response](../interfaces/_rover_lib.Response.md)
- [Rover](../interfaces/_rover_lib.Rover.md)

### Variables

- [endpoint](_rover_lib.md#endpoint)

### Functions

- [get](_rover_lib.md#get)
- [getAll](_rover_lib.md#getall)
- [getLatest](_rover_lib.md#getlatest)

## Variables

### endpoint

• `Const` **endpoint**: `"https://hiring.hypercore-protocol.org/termrover"`

The HTTP endpoint of the Rover API.

**`internal`**

#### Defined in

[lib/endpoint.ts:6](https://github.com/kasperisager/rover/blob/c631f0f/lib/endpoint.ts#L6)

## Functions

### get

▸ `Const` **get**(`fetch`, `index`): `Promise`<`null` \| [`Rover`](../interfaces/_rover_lib.Rover.md)\>

Get the specified Rover image.

#### Parameters

| Name    | Type                                         | Description                                            |
| :------ | :------------------------------------------- | :----------------------------------------------------- |
| `fetch` | [`Fetch`](../interfaces/_rover_lib.Fetch.md) | An implementation of `Fetch` to use for HTTP requests. |
| `index` | `number`                                     | The index of the Rover image to get.                   |

#### Returns

`Promise`<`null` \| [`Rover`](../interfaces/_rover_lib.Rover.md)\>

The specified Rover image if available, otherwise `null`.

#### Defined in

[lib/get.ts:15](https://github.com/kasperisager/rover/blob/c631f0f/lib/get.ts#L15)

---

### getAll

▸ `Const` **getAll**(`fetch`): `AsyncIterableIterator`<[`Rover`](../interfaces/_rover_lib.Rover.md)\>

Get an iterator over all available Rover images.

**`remarks`**
The iterator ends when no more images are available. If the iterator is
consumed, without ending, as new images are made available after the start of
a new sol, those images will also be yielded. The iterator will not yield
images made available after it has ended.

#### Parameters

| Name    | Type                                         | Description                                            |
| :------ | :------------------------------------------- | :----------------------------------------------------- |
| `fetch` | [`Fetch`](../interfaces/_rover_lib.Fetch.md) | An implementation of `Fetch` to use for HTTP requests. |

#### Returns

`AsyncIterableIterator`<[`Rover`](../interfaces/_rover_lib.Rover.md)\>

An iterator over all available Rover images.

#### Defined in

[lib/get-all.ts:20](https://github.com/kasperisager/rover/blob/c631f0f/lib/get-all.ts#L20)

---

### getLatest

▸ `Const` **getLatest**(`fetch`): `Promise`<`null` \| [`Rover`](../interfaces/_rover_lib.Rover.md)\>

Get the latest Rover image.

#### Parameters

| Name    | Type                                         | Description                                            |
| :------ | :------------------------------------------- | :----------------------------------------------------- |
| `fetch` | [`Fetch`](../interfaces/_rover_lib.Fetch.md) | An implementation of `Fetch` to use for HTTP requests. |

#### Returns

`Promise`<`null` \| [`Rover`](../interfaces/_rover_lib.Rover.md)\>

The latest Rover image if available, otherwise `null`.

#### Defined in

[lib/get-latest.ts:14](https://github.com/kasperisager/rover/blob/c631f0f/lib/get-latest.ts#L14)
