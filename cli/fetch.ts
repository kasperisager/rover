import { createContext } from "react";
import fetch from "node-fetch";

import type { Fetch } from "@rover/lib";

export const FetchContext = createContext<Fetch>(fetch);
