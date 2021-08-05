import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react";

import { Rover, getAll } from "@rover/lib";

import { FetchContext } from "../fetch";
import { Image } from "../components/image";

const defaultSpeed = 5000;

export const GetAll: FunctionComponent<GetAll.Properties> = ({
  speed = defaultSpeed,
}) => {
  const fetch = useContext(FetchContext);

  const [image, setImage] = useState<Rover | null>(null);

  useEffect(() => {
    let iterator = getAll(fetch);
    let timer: any;

    const transition = async () => {
      const next = await iterator.next();

      if (next.done === true) {
        iterator = getAll(fetch);
        transition();
      } else {
        setImage(next.value);

        timer = setTimeout(
          transition,
          Number.isNaN(speed) ? defaultSpeed : speed
        );
      }
    };

    transition();

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [speed]);

  if (image === null) {
    return <p>Contacting Mission Control</p>;
  }

  return (
    <Image src={image.images.base64}>
      <div aria-live="polite" aria-atomic="true">
        <p>
          <b>Date:</b> {image.metadata.earth_date as string}
        </p>
        <p>
          <b>Sol:</b> {image.metadata.sol as number}
        </p>
      </div>
    </Image>
  );
};

export namespace GetAll {
  export type Properties = {
    speed?: number;
  };
}