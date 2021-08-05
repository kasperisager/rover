/**
 * @public
 */
export type Rover = {
  metadata: {
    [key: string]: unknown;
  };
  images: {
    base64: string;
    ascii: string;
  };
};
