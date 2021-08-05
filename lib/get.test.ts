import { stub } from "sinon";

import { endpoint } from "./endpoint";
import { images } from "./fixtures";
import { get } from "./get";

test("get() returns a specific image", async () => {
  const fetch = stub();

  fetch.withArgs(`${endpoint}/0`).resolves({
    ok: true,
    json: async () => images[0],
  });

  expect(await get(fetch, 0)).toEqual(images[0]);
});

test("get() returns null when an image isn't found", async () => {
  const fetch = stub();

  fetch.withArgs(`${endpoint}/0`).resolves({
    ok: false,
  });

  expect(await get(fetch, 0)).toEqual(null);
});
