import React from "react";
import { create } from "react-test-renderer";

import { Image } from "./image";

test("<Image> renders with a src attribute", () => {
  const component = create(<Image src=":-)" />);

  expect(component.toJSON()).toMatchSnapshot();
});
