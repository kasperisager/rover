import React from "react";
import { ReactTestRenderer, create, act } from "react-test-renderer";
import { stub, useFakeTimers } from "sinon";

import { endpoint, fixtures } from "@rover/lib";

import { FetchContext } from "../fetch";
import { Image } from "../components/image";
import { GetAll } from "./get-all";

const clock = useFakeTimers();

test("<GetAll> renders with an image carousel", async () => {
  const fetch = stub();

  fetch.withArgs(`${endpoint}/0`).resolves({
    ok: true,
    json: async () => fixtures.images[0],
  });

  fetch.withArgs(`${endpoint}/1`).resolves({
    ok: true,
    json: async () => fixtures.images[1],
  });

  fetch.withArgs(`${endpoint}/2`).resolves({
    ok: false,
  });

  let component: ReactTestRenderer;

  await act(async () => {
    component = create(
      <FetchContext.Provider value={fetch}>
        <GetAll />
      </FetchContext.Provider>
    );
  });

  for (let i = 0; i < 2; i++) {
    await act(async () => {
      await clock.nextAsync();
    });

    expect(component!.toJSON()).toMatchSnapshot();

    expect(component!.root.findByType(Image).props.src).toBe(
      fixtures.images[i]?.images.ascii
    );
  }
});
