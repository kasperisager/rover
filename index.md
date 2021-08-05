# Rover

> :rocket: Exploring images from the Perseverance rover on the web and command line

## Table of contents

- [Building](#building)
- [Usage](#usage)

## Building

To build the project, make sure to first install a recent version of [Node.js](https://nodejs.org/en/) and the [Yarn](https://yarnpkg.com) package manager. Once installed, fetch the needed dependencies:

```console
yarn install
```

Next, build the project:

```console
yarn build
```

To run the set suite, do:

```console
yarn test
```

## Usage

The project has two available front ends: A web application and a command line interface. For programmatic usage, check out the shared [`@rover/lib`](docs/modules/_rover_lib.md) module.

### Web application

To use the web application, do:

```console
yarn workspace @rover/app start
```

The web application exposes 3 endpoints:

1.  `/`  
    Show a carousel of rover images. The transition speed can be adjusted via the `speed` query parameter.

2.  `/latest`  
    Show the latest rover image.

3.  `/:index`  
    Show the specified rover image.

### Command line

To use the command line interface, do:

```console
yarn workspace @rover/cli rover
```

The command line interface exposes 3 commands:

1.  `get-all`  
    Show a carousel of rover images. The transition speed can be adjusted via the `--speed` flag.

2.  `get-latest`  
    Show the latest rover image.

3.  `get <index>`  
    Show the specified rover image.
