import { useEffect } from "react";
import { useMyContext } from "../hooks/useMyContext";

function Header() {
    const myContext = useMyContext()
    const navigationList = ["pomodoro", "short break", "long break"];

    const handleClick = (i: number) => {
        myContext?.setActiveButtonIndex(i);
    }
    useEffect(() => {
        if (myContext?.activeButtonIndex === 0) {
            myContext?.setActiveButton(myContext.savedStates.pomodoroValue)
        } else if (myContext?.activeButtonIndex === 1) {
            myContext?.setActiveButton(myContext?.savedStates.shortBreakValue)
        } else if (myContext?.activeButtonIndex === 2) {
            myContext?.setActiveButton(myContext?.savedStates.longBreakValue)
        }
    }, [myContext]);



    console.log(`activeButton ${myContext?.activeButton}`);
    console.log(`activeIndx ${myContext?.activeButtonIndex}`)

    return (
        <header className="flex flex-col  gap-12 mt-[70px]">
            <h1 className="text-hawkesBlue text-[24px] text-center">pomodoro</h1>
            <nav className="bg-darkBlueBlack rounded-[16px] w-[327px] m-auto p-[5px]">
                <ul className="flex items-center justify-between">
                    {navigationList.map((title, index) => (
                        <li
                            className={`${myContext?.activeButtonIndex === index ? "[&>button]:bg-red" : ""} [&>button]:py-[15px] [&>button]:text-[12px] [&>button]:rounded-[25px] [&>button]:w-[105.5px] [&>button]:text-hawkesBlue [&>button]:font-bold`}
                            key={index}
                        >
                            <button onClick={() => handleClick(index)}>{title}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
