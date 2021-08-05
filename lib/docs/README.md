@rover/lib

# @rover/lib

## Table of contents

### Interfaces

- [Fetch](interfaces/Fetch.md)
- [Response](interfaces/Response.md)
- [Rover](interfaces/Rover.md)

### Variables

- [endpoint](README.md#endpoint)

### Functions

- [get](README.md#get)
- [getAll](README.md#getall)
- [getLatest](README.md#getlatest)

## Variables

### endpoint

• `Const` **endpoint**: `"https://hiring.hypercore-protocol.org/termrover"`

The HTTP endpoint of the Rover API.

**`internal`**

#### Defined in

endpoint.d.ts:6

## Functions

### get

▸ `Const` **get**(`fetch`, `index`): `Promise`<`null` \| [`Rover`](interfaces/Rover.md)\>

Get the specified Rover image.

#### Parameters

| Name    | Type                           | Description                                            |
| :------ | :----------------------------- | :----------------------------------------------------- |
| `fetch` | [`Fetch`](interfaces/Fetch.md) | An implementation of `Fetch` to use for HTTP requests. |
| `index` | `number`                       | The index of the Rover image to get.                   |

#### Returns

`Promise`<`null` \| [`Rover`](interfaces/Rover.md)\>

The specified Rover image if available, other `null`.

#### Defined in

get.d.ts:12

---

### getAll

▸ `Const` **getAll**(`fetch`): `AsyncIterableIterator`<[`Rover`](interfaces/Rover.md)\>

Get an iterator over all available Rover images.

**`remarks`**
The iterator ends when no more images are available. If the iterator is
consumed, without ending, as new images are made available after the start of
a new sol, those images will also be yielded. The iterator will not yield
images made available after it has ended.

#### Parameters

| Name    | Type                           | Description                                            |
| :------ | :----------------------------- | :----------------------------------------------------- |
| `fetch` | [`Fetch`](interfaces/Fetch.md) | An implementation of `Fetch` to use for HTTP requests. |

#### Returns

`AsyncIterableIterator`<[`Rover`](interfaces/Rover.md)\>

An iterator over all available Rover images.

#### Defined in

get-all.d.ts:17

---

### getLatest

▸ `Const` **getLatest**(`fetch`): `Promise`<`null` \| [`Rover`](interfaces/Rover.md)\>

Get the latest Rover image. If no latest image isn't available, `null` is
returned.

#### Parameters

| Name    | Type                           | Description                                            |
| :------ | :----------------------------- | :----------------------------------------------------- |
| `fetch` | [`Fetch`](interfaces/Fetch.md) | An implementation of `Fetch` to use for HTTP requests. |

#### Returns

`Promise`<`null` \| [`Rover`](interfaces/Rover.md)\>

The latest Rover image if available, other `null`.

#### Defined in

get-latest.d.ts:12
