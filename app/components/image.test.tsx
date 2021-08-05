import React from "react";
import { create } from "react-test-renderer";

import { Image } from "./image";

test("<Image> renders with a src attribute", () => {
  const component = create(<Image src="https://example.com/foo.png" />);

  expect(component.toJSON()).toMatchSnapshot();
});

test("<Image> renders with children", () => {
  const component = create(
    <Image src="https://example.com/foo.png">Hello world</Image>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
