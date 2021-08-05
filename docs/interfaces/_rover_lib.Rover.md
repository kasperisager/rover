[Rover](../README.md) / [Exports](../modules.md) / [@rover/lib](../modules/_rover_lib.md) / Rover

# Interface: Rover

[@rover/lib](../modules/_rover_lib.md).Rover

The shape of Rover images returned by the Rover API.

[http://hiring.hypercore-protocol.org/termrover/0](http://hiring.hypercore-protocol.org/termrover/0)

## Table of contents

### Properties

- [images](_rover_lib.Rover.md#images)
- [metadata](_rover_lib.Rover.md#metadata)

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

[lib/rover.ts:19](https://github.com/kasperisager/rover/blob/665e51e/lib/rover.ts#L19)

---

### metadata

• **metadata**: `Object`

Arbitrary metadata associated with the Rover image. Explore at will!

#### Index signature

▪ [key: `string`]: `unknown`

#### Defined in

[lib/rover.ts:12](https://github.com/kasperisager/rover/blob/665e51e/lib/rover.ts#L12)
