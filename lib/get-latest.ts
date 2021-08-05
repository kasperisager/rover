import type { Fetch } from "./fetch";
import type { Rover } from "./rover";

import { endpoint } from "./endpoint";

/**
 * Get the latest Rover image. If no latest image isn't available, `null` is
 * returned.
 *
 * @param fetch - An implementation of `Fetch` to use for HTTP requests.
 * @returns The latest Rover image if available, other `null`.
 *
 * @public
 */
export const getLatest = async (fetch: Fetch): Promise<Rover | null> => {
  const response = await fetch(`${endpoint}/latest`);

  if (!response.ok) {
    return null;
  }

  return response.json();
};
