import { createContext } from "react";

import type { Fetch } from "@rover/lib";

export const FetchContext = createContext<Fetch>(globalThis.fetch);
