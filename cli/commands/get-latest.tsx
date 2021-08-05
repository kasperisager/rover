import React from "react";

import { Command } from "../command";
import { GetLatest } from "../views/get-latest";

export default class extends Command {
  static paths = [["get-latest"]];

  static usage = {
    category: "Commands",
    description: "Get the latest rover image and show it.",
  };

  render() {
    return <GetLatest />;
  }
}
