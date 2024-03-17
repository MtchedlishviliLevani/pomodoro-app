// import { useEffect } from "react";
import { useMyContext } from "../hooks/useMyContext"

function Button() {
    const myContext = useMyContext();
    console.log(myContext?.savedStates);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        myContext?.setSavedStates({ ...myContext.savedStates, pomodoroValue: myContext?.pomodoroValue, shortBreakValue: myContext?.shortBreakValue, longBreakValue: myContext.longBreakValue, activeColor: myContext.activeColor, activeFont: myContext.activeFont });

    }
    return (
        <button onClick={(e) => handleClick(e)} style={{ background: myContext?.savedStates.activeColor }} className='text-white bg-red absolute  translate-x-[-50%] translate-y-[-50%] top-[58px] left-[50%]  py-[14.5px] px-[50px] rounded-[25px] font-bold text-[16px]'>Apply</button>
    )
}

export default Button
