/**
 * @internal
 */
export type Fetch = (url: string) => Promise<Response>;

/**
 * @internal
 */
export type Response = {
  readonly ok: boolean;
  json(): Promise<any>;
};
