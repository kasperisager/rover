import { stub } from "sinon";

import { endpoint } from "./endpoint";
import { images } from "./fixtures";
import { getLatest } from "./get-latest";

test("getLatest() returns the most recent image", async () => {
  const fetch = stub();

  fetch.withArgs(`${endpoint}/latest`).resolves({
    ok: true,
    json: async () => images[0],
  });

  expect(await getLatest(fetch)).toEqual(images[0]);
});

test("getLatest() returns null when no latest image is found", async () => {
  const fetch = stub();

  fetch.withArgs(`${endpoint}/latest`).resolves({
    ok: false,
  });

  expect(await getLatest(fetch)).toEqual(null);
});
