import { useContext } from "react";
import { myContext } from "../components/context/myContext";

export function useMyContext() {
  return useContext(myContext);
}
