import type { Fetch } from "./fetch";
import type { Rover } from "./rover";

import { endpoint } from "./endpoint";

/**
 * Get the specified Rover image.
 *
 * @param fetch - An implementation of `Fetch` to use for HTTP requests.
 * @param index - The index of the Rover image to get.
 * @returns The specified Rover image if available, otherwise `null`.
 *
 * @public
 */
export const get = async (
  fetch: Fetch,
  index: number
): Promise<Rover | null> => {
  const response = await fetch(`${endpoint}/${index}`);

  if (!response.ok) {
    return null;
  }

  return response.json();
};
