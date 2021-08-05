import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react";

import { Rover, get } from "@rover/lib";

import { FetchContext } from "../fetch";
import { Image } from "../components/image";

export const Get: FunctionComponent<Get.Properties> = ({ index }) => {
  const fetch = useContext(FetchContext);

  const [image, setImage] = useState<Rover | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    get(fetch, index).then((rover) => {
      if (rover) {
        setImage(rover);
      } else {
        setError("No image was found");
      }
    });
  }, [index]);

  if (error !== null) {
    return <p role="alert">{error}</p>;
  }

  if (image === null) {
    return <p>Contacting Mission Control</p>;
  }

  return (
    <Image src={image.images.base64}>
      <p>
        <b>Date:</b> {image.metadata.earth_date as string}
      </p>
      <p>
        <b>Sol:</b> {image.metadata.sol as number}
      </p>
    </Image>
  );
};

export namespace Get {
  export type Properties = {
    index: number;
  };
}
