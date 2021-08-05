import React from "react";
import { ReactTestRenderer, create, act } from "react-test-renderer";
import { stub } from "sinon";

import { endpoint } from "@rover/lib";
import * as fixtures from "@rover/lib/fixtures";

import { FetchContext } from "../fetch";
import { GetLatest } from "./get-latest";

test("<GetLatest> renders with the latest image", async () => {
  const fetch = stub();

  fetch.withArgs(`${endpoint}/latest`).resolves({
    ok: true,
    json: async () => fixtures.images[0],
  });

  let component: ReactTestRenderer;

  await act(async () => {
    component = create(
      <FetchContext.Provider value={fetch}>
        <GetLatest />
      </FetchContext.Provider>
    );
  });

  expect(component!.toJSON()).toMatchSnapshot();
});

test("<GetLatest> renders with an error when no latest image is found", async () => {
  const fetch = stub();

  fetch.withArgs(`${endpoint}/latest`).resolves({
    ok: false,
  });

  let component: ReactTestRenderer;

  await act(async () => {
    component = create(
      <FetchContext.Provider value={fetch}>
        <GetLatest />
      </FetchContext.Provider>
    );
  });

  expect(component!.toJSON()).toMatchSnapshot();
});
