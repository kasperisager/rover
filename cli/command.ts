import { Command as BaseCommand } from "clipanion";
import type { ReactElement } from "react";
import { render } from "ink";

export abstract class Command extends BaseCommand {
  async execute() {
    const { stdin, stdout } = this.context;

    return render(this.render(), {
      stdin: stdin as NodeJS.ReadStream,
      stdout: stdout as NodeJS.WriteStream,
    })
      .waitUntilExit()
      .then(() => 0)
      .catch(() => 1);
  }

  abstract render(): ReactElement;
}
