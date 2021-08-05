import { Cli, Builtins } from "clipanion";

import GetCommand from "./commands/get";
import GetAllCommand from "./commands/get-all";
import GetLatestCommand from "./commands/get-latest";

import * as pkg from "./package.json";

export const cli = new Cli({
  binaryLabel: pkg.name,
  binaryName: "rover",
  binaryVersion: pkg.version,
});

cli.register(Builtins.HelpCommand);
cli.register(Builtins.VersionCommand);

cli.register(GetCommand);
cli.register(GetAllCommand);
cli.register(GetLatestCommand);
