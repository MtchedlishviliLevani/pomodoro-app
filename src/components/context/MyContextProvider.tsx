/* eslint-disable react-refresh/only-export-components */
import { ReactNode, useState } from "react";
import { myContext } from "./myContext";

interface SavedTypes {
  pomodoroValue: number;
  shortBreakValue: number;
  longBreakValue: number;
  activeColor: string;
  activeFont: string
}

export interface Context {
  pomodoroValue: number;
  shortBreakValue: number;
  longBreakValue: number;
  setPomodoroValue: React.Dispatch<React.SetStateAction<number>>
  setShortBreakValue: React.Dispatch<React.SetStateAction<number>>;
  setLongBreakValue: React.Dispatch<React.SetStateAction<number>>;
  savedStates: SavedTypes;
  setSavedStates: React.Dispatch<React.SetStateAction<SavedTypes>>;
  activeButton: number | undefined;
  setActiveButton: React.Dispatch<React.SetStateAction<number>>;
  // edited
  activeButtonIndex: number;
  setActiveButtonIndex: React.Dispatch<React.SetStateAction<number>>;
  activeColor: string;
  setActiveColor: React.Dispatch<React.SetStateAction<string>>
  activeFont: string;
  setActiveFont: React.Dispatch<React.SetStateAction<string>>
}


function MyContextProvider({ children }: { children: ReactNode }) {
  const [pomodoroValue, setPomodoroValue] = useState(25);
  const [shortBreakValue, setShortBreakValue] = useState(5);
  const [longBreakValue, setLongBreakValue] = useState(15);
  const [activeColor, setActiveColor] = useState("#F87070");
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);
  const [activeFont, setActiveFont] = useState("font-kumbh");
  const [savedStates, setSavedStates] = useState({ pomodoroValue, shortBreakValue, longBreakValue, activeColor, activeFont });
  const [activeButton, setActiveButton] = useState(savedStates.pomodoroValue);







  const contextObj: Context = {
    pomodoroValue,
    shortBreakValue,
    longBreakValue,
    setPomodoroValue,
    setShortBreakValue,
    setLongBreakValue,
    savedStates,
    setSavedStates,
    activeButton,
    setActiveButton,
    activeButtonIndex,
    setActiveButtonIndex,
    activeColor,
    setActiveColor,
    activeFont,
    setActiveFont
  }


  return <myContext.Provider value={contextObj}>
    {children}
  </myContext.Provider >;
}

export default MyContextProvider;
