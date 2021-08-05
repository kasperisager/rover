import React, { FunctionComponent } from "react";
import { Text } from "ink";

export const Image: FunctionComponent<Image.Properties> = ({ src }) => {
  return <Text>{src}</Text>;
};

export namespace Image {
  export type Properties = {
    src: string;
  };
}
