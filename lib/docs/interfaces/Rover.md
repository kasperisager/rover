[@rover/lib](../README.md) / Rover

# Interface: Rover

The shape of Rover images returned by the Rover API.

[http://hiring.hypercore-protocol.org/termrover/0](http://hiring.hypercore-protocol.org/termrover/0)

## Table of contents

### Properties

- [images](Rover.md#images)
- [metadata](Rover.md#metadata)

## Properties

### images

• **images**: `Object`

The Rover image is various formats.

#### Type declaration

| Name     | Type     | Description                                                                                                                                                                                 |
| :------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ascii`  | `string` | An ASCII art representation of the Rover image with ANSI color codes. This is useful for outputting to a terminal. **`example`** `` js process.stdout.write(`${rover.images.ascii}\n`);  `` |
| `base64` | `string` | A Base64 encoding of the Rover image. This is useful for HTML `<img>` tags. **`example`** `jsx <img src={rover.images.base64} /> `                                                          |

#### Defined in

rover.d.ts:18

---

### metadata

• **metadata**: `Object`

Arbitrary metadata associated with the Rover image. Explore at will!

#### Index signature

▪ [key: `string`]: `unknown`

#### Defined in

rover.d.ts:12
