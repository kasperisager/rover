[Rover](../README.md) / [Exports](../modules.md) / [@rover/lib](../modules/_rover_lib.md) / Fetch

# Interface: Fetch

[@rover/lib](../modules/_rover_lib.md).Fetch

## Callable

### Fetch

▸ **Fetch**(`url`): `Promise`<[`Response`](_rover_lib.Response.md)\>

A minimal `fetch()` compatible interface.

[https://fetch.spec.whatwg.org/#dom-global-fetch](https://fetch.spec.whatwg.org/#dom-global-fetch)

#### Parameters

| Name  | Type     | Description       |
| :---- | :------- | :---------------- |
| `url` | `string` | The URL to fetch. |

#### Returns

`Promise`<[`Response`](_rover_lib.Response.md)\>

The resulting response.

#### Defined in

[lib/fetch.ts:20](https://github.com/kasperisager/rover/blob/09d897c/lib/fetch.ts#L20)
