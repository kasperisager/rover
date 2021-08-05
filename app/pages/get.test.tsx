import React from "react";
import { ReactTestRenderer, create, act } from "react-test-renderer";
import { stub } from "sinon";

import { endpoint } from "@rover/lib";
import * as fixtures from "@rover/lib/fixtures";

import { FetchContext } from "../fetch";
import { Get } from "./get";

test("<Get> renders with an image", async () => {
  const fetch = stub();

  fetch.withArgs(`${endpoint}/0`).resolves({
    ok: true,
    json: async () => fixtures.images[0],
  });

  let component: ReactTestRenderer;

  await act(async () => {
    component = create(
      <FetchContext.Provider value={fetch}>
        <Get index={0} />
      </FetchContext.Provider>
    );
  });

  expect(component!.toJSON()).toMatchSnapshot();
});

test("<Get> renders with an error when an image isn't found", async () => {
  const fetch = stub();

  fetch.withArgs(`${endpoint}/0`).resolves({
    ok: false,
  });

  let component: ReactTestRenderer;

  await act(async () => {
    component = create(
      <FetchContext.Provider value={fetch}>
        <Get index={0} />
      </FetchContext.Provider>
    );
  });

  expect(component!.toJSON()).toMatchSnapshot();
});
