[@rover/lib](../README.md) / Response

# Interface: Response

A minimal `Response` compatible interface.

[https://fetch.spec.whatwg.org/#response-class](https://fetch.spec.whatwg.org/#response-class)

## Table of contents

### Properties

- [ok](Response.md#ok)

### Methods

- [json](Response.md#json)

## Properties

### ok

• `Readonly` **ok**: `boolean`

Whether or not the response status is OK.

[https://fetch.spec.whatwg.org/#dom-response-ok](https://fetch.spec.whatwg.org/#dom-response-ok)

#### Defined in

fetch.d.ts:27

## Methods

### json

▸ **json**(): `Promise`<`any`\>

Consume the response body and return it as JSON.

[https://fetch.spec.whatwg.org/#dom-body-json](https://fetch.spec.whatwg.org/#dom-body-json)

#### Returns

`Promise`<`any`\>

The response body as JSON.

#### Defined in

fetch.d.ts:35
