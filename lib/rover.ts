/**
 * The shape of Rover images returned by the Rover API.
 *
 * {@link http://hiring.hypercore-protocol.org/termrover/0}
 *
 * @public
 */
export interface Rover {
  /**
   * Arbitrary metadata associated with the Rover image. Explore at will!
   */
  metadata: {
    [key: string]: unknown;
  };

  /**
   * The Rover image is various formats.
   */
  images: {
    /**
     * A Base64 encoding of the Rover image. This is useful for HTML `<img>`
     * tags.
     *
     * @example
     * ```jsx
     * <img src={rover.images.base64} />
     * ```
     */
    base64: string;

    /**
     * An ASCII art representation of the Rover image with ANSI color codes.
     * This is useful for outputting to a terminal.
     *
     * @example
     * ```js
     * process.stdout.write(`${rover.images.ascii}\n`);
     * ```
     */
    ascii: string;
  };
}
