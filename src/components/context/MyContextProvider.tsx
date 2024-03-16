/* eslint-disable react-refresh/only-export-components */
import { ReactNode, useState } from "react";
import { myContext } from "./myContext";

interface SavedTypes {
  pomodoroValue: number;
  shortBreakValue: number;
  longBreakValue: number;
}

export interface Context {
  pomodoroValue: number;
  shortBreakValue: number;
  longBreakValue: number;
  setPomodoroValue: React.Dispatch<React.SetStateAction<number>>
  setShortBreakValue: React.Dispatch<React.SetStateAction<number>>;
  setLongBreakValue: React.Dispatch<React.SetStateAction<number>>;
  activeFontColorIndex: number;
  setActiveFontColorIndex: React.Dispatch<React.SetStateAction<number>>;
  activeColorIndex: number;
  setActiveColorIndex: React.Dispatch<React.SetStateAction<number>>;
  savedStates: SavedTypes;
  setSavedStates: React.Dispatch<React.SetStateAction<SavedTypes>>;
  activeButton: number | undefined;
  setActiveButton: React.Dispatch<React.SetStateAction<number>>;
  // edited
  activeButtonIndex: number;
  setActiveButtonIndex: React.Dispatch<React.SetStateAction<number>>;


}


function MyContextProvider({ children }: { children: ReactNode }) {
  const [pomodoroValue, setPomodoroValue] = useState(25);
  const [shortBreakValue, setShortBreakValue] = useState(5);
  const [longBreakValue, setLongBreakValue] = useState(15);
  const [activeFontColorIndex, setActiveFontColorIndex] = useState(0)
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [savedStates, setSavedStates] = useState({ pomodoroValue, shortBreakValue, longBreakValue });
  const [activeButton, setActiveButton] = useState(savedStates.pomodoroValue);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);




  const contextObj: Context = {
    pomodoroValue,
    shortBreakValue,
    longBreakValue,
    setPomodoroValue,
    setShortBreakValue,
    setLongBreakValue,
    activeFontColorIndex,
    setActiveFontColorIndex,
    activeColorIndex,
    setActiveColorIndex,
    savedStates,
    setSavedStates,
    activeButton,
    setActiveButton,
    activeButtonIndex,
    setActiveButtonIndex
  }


  return <myContext.Provider value={contextObj}>
    {children}
  </myContext.Provider >;
}

export default MyContextProvider;
