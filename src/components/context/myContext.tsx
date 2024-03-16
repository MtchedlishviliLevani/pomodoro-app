import { createContext } from "react";
import { Context } from "./MyContextProvider";

export const myContext = createContext<Context | null>(null);
