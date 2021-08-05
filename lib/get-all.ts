import type { Fetch } from "./fetch";
import type { Rover } from "./rover";

import { endpoint } from "./endpoint";

/**
 * @public
 */
export const getAll = (fetch: Fetch): AsyncIterableIterator<Rover> => {
  /**
   * The index of the next image to fetch.
   */
  let index = 0;

  /**
   * Whether or not iteration has ended. Iteration ends when the request for the
   * next image yields a 404.
   *
   * @remarks
   * The observant reader might now be going "But wait! Isn't there this nifty
   * HTTP endpoint to get the total number of images currently available and
   * can't iteration then end when that number is exceeded?". Yes, it could.
   * That would, however, force an unnecessary burden on our caller as they
   * would then always pay for the cost of that HTTP request, even if they never
   * consumed the iterator.
   *
   * More formally, the price of consuming N images from the iterator would
   * always be N + 1 HTTP requests, even if N is smaller than the total number
   * of images available. If we instead stop iteration as soon as we encounter a
   * 404, we'd only pay for that additional HTTP request if we actually consume
   * all the images. For the remaining cases, the price would always be N HTTP
   * requests.
   *
   * On a related note, if we wanted the iterator to be resumable after the
   * start of a new sol, we also couldn't count on the total number of images as
   * that would change between sols.
   */
  let done = false;

  return {
    async next(): Promise<IteratorResult<Rover, void>> {
      // If iteration has already ended, bail out early. This ensures that we
      // don't needlesly attempt to fetch the next image just to decide that it
      // doesn't exist.
      //
      // Perhaps more importantly, this also ensures that we adhere to the
      // iteration protocol even if the iterator finishes before the end of a
      // sol and is attempted resumed after the start of a new sol.
      // https://tc39.es/ecma262/#sec-iteration
      if (done) {
        return {
          done: true,
          value: undefined,
        };
      }

      const response = await fetch(`${endpoint}/${index}`);

      // Finish iteration as soon as we encounter a non-OK status code, which
      // will typically be caused by a 404 when requesting the first image that
      // isn't yet available.
      if (!response.ok) {
        done = true;

        return {
          done: true,
          value: undefined,
        };
      }

      // Increment the index only after we've verified that the next image was
      // available. Should we later decide to allow resuming an iterator after
      // the start of a new sol, this ensures that we resume iteration where we
      // previously left off.
      index++;

      return {
        value: await response.json(),
      };
    },

    [Symbol.asyncIterator]() {
      return this;
    },
  };
};
