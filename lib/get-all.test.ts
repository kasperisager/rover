import { stub } from "sinon";

import { endpoint } from "./endpoint";
import { images } from "./fixtures";
import { getAll } from "./get-all";

test("getAll() yields all available images", async () => {
  const fetch = stub();

  fetch.withArgs(`${endpoint}/0`).resolves({
    ok: true,
    json: async () => images[0],
  });

  fetch.withArgs(`${endpoint}/1`).resolves({
    ok: true,
    json: async () => images[1],
  });

  fetch.withArgs(`${endpoint}/2`).resolves({ ok: false });

  const iterator = getAll(fetch);

  expect(await iterator.next()).toEqual({ value: images[0] });
  expect(await iterator.next()).toEqual({ value: images[1] });
  expect(await iterator.next()).toEqual({ done: true });
});

test("getAll() does not yield images made available after it has finished", async () => {
  const fetch = stub();

  fetch.withArgs(`${endpoint}/0`).resolves({
    ok: true,
    json: async () => images[0],
  });

  fetch.withArgs(`${endpoint}/1`).resolves({ ok: false });
  fetch.withArgs(`${endpoint}/2`).resolves({ ok: false });

  const iterator = getAll(fetch);

  expect(await iterator.next()).toEqual({ value: images[0] });
  expect(await iterator.next()).toEqual({ done: true });

  fetch.withArgs(`${endpoint}/1`).resolves({
    ok: true,
    json: async () => images[1],
  });

  expect(await iterator.next()).toEqual({ done: true });
});
