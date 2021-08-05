import { Option } from "clipanion";
import { isNumber } from "typanion";
import React from "react";

import { Command } from "../command";
import { Get } from "../views/get";

export default class extends Command {
  static paths = [["get"]];

  static usage = {
    category: "Commands",
    description: "Get a specific rover image and show it.",
  };

  index = Option.String({ validator: isNumber() });

  render() {
    return <Get index={this.index} />;
  }
}
