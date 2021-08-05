import type { Fetch } from "./fetch";
import type { Rover } from "./rover";

import { endpoint } from "./endpoint";

/**
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
