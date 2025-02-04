[Rover](../README.md) / [Exports](../modules.md) / [@rover/cli](../modules/_rover_cli.md) / GetLatestCommand

# Class: GetLatestCommand

[@rover/cli](../modules/_rover_cli.md).GetLatestCommand

## Hierarchy

- [`Command`](_rover_cli.Command.md)

  ↳ **`GetLatestCommand`**

## Table of contents

### Constructors

- [constructor](_rover_cli.GetLatestCommand.md#constructor)

### Properties

- [cli](_rover_cli.GetLatestCommand.md#cli)
- [context](_rover_cli.GetLatestCommand.md#context)
- [help](_rover_cli.GetLatestCommand.md#help)
- [path](_rover_cli.GetLatestCommand.md#path)
- [paths](_rover_cli.GetLatestCommand.md#paths)
- [Default](_rover_cli.GetLatestCommand.md#default)
- [isOption](_rover_cli.GetLatestCommand.md#isoption)
- [path](_rover_cli.GetLatestCommand.md#path)
- [paths](_rover_cli.GetLatestCommand.md#paths)
- [schema](_rover_cli.GetLatestCommand.md#schema)
- [usage](_rover_cli.GetLatestCommand.md#usage)

### Methods

- [catch](_rover_cli.GetLatestCommand.md#catch)
- [execute](_rover_cli.GetLatestCommand.md#execute)
- [render](_rover_cli.GetLatestCommand.md#render)
- [validateAndExecute](_rover_cli.GetLatestCommand.md#validateandexecute)
- [Usage](_rover_cli.GetLatestCommand.md#usage)

## Constructors

### constructor

• **new GetLatestCommand**()

#### Inherited from

[Command](_rover_cli.Command.md).[constructor](_rover_cli.Command.md#constructor)

## Properties

### cli

• **cli**: `MiniCli`<`BaseContext`\>

Predefined variable that will be populated with a miniature API that can
be used to query Clipanion and forward commands.

#### Inherited from

[Command](_rover_cli.Command.md).[cli](_rover_cli.Command.md#cli)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:118

---

### context

• **context**: `BaseContext`

Predefined variable that will be populated with the context of the
application.

#### Inherited from

[Command](_rover_cli.Command.md).[context](_rover_cli.Command.md#context)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:123

---

### help

• **help**: `boolean`

Predefined that will be set to true if `-h,--help` has been used, in
which case `Command#execute` won't be called.

#### Inherited from

[Command](_rover_cli.Command.md).[help](_rover_cli.Command.md#help)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:113

---

### path

• **path**: `string`[]

Predefined variable that will be populated with the path that got used
to access the command currently being executed.

#### Inherited from

[Command](_rover_cli.Command.md).[path](_rover_cli.Command.md#path)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:128

---

### paths

• `Optional` **paths**: `undefined`

**`deprecated`** Do not use this; prefer the static `paths` property instead.

#### Inherited from

[Command](_rover_cli.Command.md).[paths](_rover_cli.Command.md#paths)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:69

---

### Default

▪ `Static` **Default**: `never`[]

Just an helper to use along with the `paths` fields, to make it
clearer that a command is the default one.

**`example`**
class MyCommand extends Command {
static paths = [Command.Default];
}

#### Inherited from

[Command](_rover_cli.Command.md).[Default](_rover_cli.Command.md#default)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:143

---

### isOption

▪ `Static` **isOption**: typeof `isOptionSymbol`

Used to detect option definitions.

#### Inherited from

[Command](_rover_cli.Command.md).[isOption](_rover_cli.Command.md#isoption)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:133

---

### path

▪ `Static` **path**: `never`

Defined to prevent a common typo.

#### Inherited from

[Command](_rover_cli.Command.md).[path](_rover_cli.Command.md#path)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:73

---

### paths

▪ `Static` **paths**: `string`[][]

Paths under which the command should be exposed.

#### Overrides

[Command](_rover_cli.Command.md).[paths](_rover_cli.Command.md#paths)

#### Defined in

[cli/commands/get-latest.tsx:7](https://github.com/kasperisager/rover/blob/c631f0f/cli/commands/get-latest.tsx#L7)

---

### schema

▪ `Static` `Optional` **schema**: `LooseTest`<`Object`\>[]

Defines a schema to apply before running the `execute` method. The
schema is expected to be generated by Typanion.

**`see`** https://github.com/arcanis/typanion

#### Inherited from

[Command](_rover_cli.Command.md).[schema](_rover_cli.Command.md#schema)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:93

---

### usage

▪ `Static` **usage**: `Object`

Contains the usage information for the command. If undefined, the
command will be hidden from the general listing.

#### Type declaration

| Name          | Type     |
| :------------ | :------- |
| `category`    | `string` |
| `description` | `string` |

#### Overrides

[Command](_rover_cli.Command.md).[usage](_rover_cli.Command.md#usage)

#### Defined in

[cli/commands/get-latest.tsx:9](https://github.com/kasperisager/rover/blob/c631f0f/cli/commands/get-latest.tsx#L9)

## Methods

### catch

▸ **catch**(`error`): `Promise`<`void`\>

Standard error handler which will simply rethrow the error. Can be used
to add custom logic to handle errors from the command or simply return
the parent class error handling.

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Command](_rover_cli.Command.md).[catch](_rover_cli.Command.md#catch)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:108

---

### execute

▸ **execute**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[Command](_rover_cli.Command.md).[execute](_rover_cli.Command.md#execute)

#### Defined in

[cli/command.ts:6](https://github.com/kasperisager/rover/blob/c631f0f/cli/command.ts#L6)

---

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

[Command](_rover_cli.Command.md).[render](_rover_cli.Command.md#render)

#### Defined in

[cli/commands/get-latest.tsx:14](https://github.com/kasperisager/rover/blob/c631f0f/cli/commands/get-latest.tsx#L14)

---

### validateAndExecute

▸ **validateAndExecute**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[Command](_rover_cli.Command.md).[validateAndExecute](_rover_cli.Command.md#validateandexecute)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:129

---

### Usage

▸ `Static` **Usage**(`usage`): `Usage`

Defines the usage information for the given command.

#### Parameters

| Name    | Type    |
| :------ | :------ |
| `usage` | `Usage` |

#### Returns

`Usage`

#### Inherited from

[Command](_rover_cli.Command.md).[Usage](_rover_cli.Command.md#usage)

#### Defined in

node_modules/clipanion/lib/advanced/Command.d.ts:81
