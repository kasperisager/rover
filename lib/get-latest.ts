import type { Fetch } from "./fetch";
import type { Rover } from "./rover";

import { endpoint } from "./endpoint";

/**
 * @public
 */
export const getLatest = async (fetch: Fetch): Promise<Rover | null> => {
  const response = await fetch(`${endpoint}/latest`);

  if (!response.ok) {
    return null;
  }

  return response.json();
};
