// This module specifies a small subset of the Fetch API for use in library
// functions that need to perform HTTP requests. The subset can be expanded as
// needed if additional functionality becomes necessary.
//
// For lack of defining a more feature-rich HTTP interface, this is the smallest
// possible code we can write to ensure isomorphic use between Node.js, Deno,
// browsers, and other conceivable JavaScript runtimes.

/**
 * A minimal `fetch()` compatible interface.
 *
 * {@link https://fetch.spec.whatwg.org/#dom-global-fetch}
 *
 * @param url - The URL to fetch.
 * @returns The resulting response.
 *
 * @public
 */
export interface Fetch {
  (url: string): Promise<Response>;
}

/**
 * A minimal `Response` compatible interface.
 *
 * {@link https://fetch.spec.whatwg.org/#response-class}
 *
 * @public
 */
export interface Response {
  /**
   * Whether or not the response status is OK.
   *
   * {@link https://fetch.spec.whatwg.org/#dom-response-ok}
   */
  readonly ok: boolean;

  /**
   * Consume the response body and return it as JSON.
   *
   * {@link https://fetch.spec.whatwg.org/#dom-body-json}
   *
   * @returns The response body as JSON.
   */
  json(): Promise<any>;
}
