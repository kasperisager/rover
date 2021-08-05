import { Option } from "clipanion";
import { isNumber } from "typanion";
import React from "react";

import { Command } from "../command";
import { GetAll } from "../views/get-all";

export default class extends Command {
  static paths = [["get-all"]];

  static usage = {
    category: "Commands",
    description: "Get all rover images and show them one at a time.",
  };

  speed = Option.String("--speed", {
    validator: isNumber(),
    description:
      "The duration that each rover image is shown before transitioning to the next.",
  });

  render() {
    return <GetAll speed={this.speed} />;
  }
}
