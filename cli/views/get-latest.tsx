import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react";
import { Text, useApp } from "ink";

import { Rover, getLatest } from "@rover/lib";

import { FetchContext } from "../fetch";
import { Image } from "../components/image";

export const GetLatest: FunctionComponent = () => {
  const fetch = useContext(FetchContext);
  const { exit } = useApp();

  const [image, setImage] = useState<Rover | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getLatest(fetch).then((rover) => {
      if (rover) {
        setImage(rover);
      } else {
        const error = new Error("No image was found");

        setError(error.message);
        exit(error);
      }
    });
  }, []);

  if (error !== null) {
    return <Text>{error}</Text>;
  }

  if (image === null) {
    return <Text>Contacting Mission Control</Text>;
  }

  return <Image src={image.images.ascii} />;
};
