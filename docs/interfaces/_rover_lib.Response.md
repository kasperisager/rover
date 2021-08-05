[Rover](../README.md) / [Exports](../modules.md) / [@rover/lib](../modules/_rover_lib.md) / Response

# Interface: Response

[@rover/lib](../modules/_rover_lib.md).Response

A minimal `Response` compatible interface.

[https://fetch.spec.whatwg.org/#response-class](https://fetch.spec.whatwg.org/#response-class)

## Table of contents

### Properties

- [ok](_rover_lib.Response.md#ok)

### Methods

- [json](_rover_lib.Response.md#json)

## Properties

### ok

• `Readonly` **ok**: `boolean`

Whether or not the response status is OK.

[https://fetch.spec.whatwg.org/#dom-response-ok](https://fetch.spec.whatwg.org/#dom-response-ok)

#### Defined in

[lib/fetch.ts:36](https://github.com/kasperisager/rover/blob/665e51e/lib/fetch.ts#L36)

## Methods

### json

▸ **json**(): `Promise`<`any`\>

Consume the response body and return it as JSON.

[https://fetch.spec.whatwg.org/#dom-body-json](https://fetch.spec.whatwg.org/#dom-body-json)

#### Returns

`Promise`<`any`\>

The response body as JSON.

#### Defined in

[lib/fetch.ts:45](https://github.com/kasperisager/rover/blob/665e51e/lib/fetch.ts#L45)
