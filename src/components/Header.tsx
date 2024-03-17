import { useEffect } from "react";
import { useMyContext } from "../hooks/useMyContext";

function Header() {
    const myContext = useMyContext();
    const navigationList = ["pomodoro", "short break", "long break"];

    const handleClick = (i: number) => {
        myContext?.setActiveButtonIndex(i);
    };
    useEffect(() => {
        if (myContext?.activeButtonIndex === 0) {
            myContext?.setActiveButton(myContext.savedStates.pomodoroValue);
        } else if (myContext?.activeButtonIndex === 1) {
            myContext?.setActiveButton(myContext?.savedStates.shortBreakValue);
        } else if (myContext?.activeButtonIndex === 2) {
            myContext?.setActiveButton(myContext?.savedStates.longBreakValue);
        }
    }, [myContext]);

    console.log(`activeButton ${myContext?.activeButton}`);
    console.log(`activeIndx ${myContext?.activeButtonIndex}`);

    return (
        <header className="flex flex-col gap-8  lg:gap-12 mt-[20px]  lg:mt-[70px]">
            <h1 className="text-hawkesBlue text-[24px] text-center">pomodoro</h1>
            <nav className="bg-darkBlueBlack rounded-[16px] w-[327px] m-auto p-[5px] relative z-50">
                <ul className="flex items-center justify-between">
                    {navigationList.map((title, index) => (
                        <li
                            className={` [&>button]:py-[15px] [&>button]:text-[12px] [&>button]:rounded-[25px] [&>button]:w-[105.5px] [&>button]:text-[#1E213F]  [&>button]:font-bold`}
                            key={index}
                        >
                            <button
                                style={myContext?.activeButtonIndex === index ? { background: myContext.savedStates.activeColor, color: "rgba(30, 33, 63, 1)" } : { color: "rgba(215, 224, 255, 1)" }}
                                // className={`${myContext?.activeButtonIndex === index ? `bg-[${myContext?.savedStates.activeColor}]` : ""}`}
                                onClick={() => handleClick(index)}
                            >
                                {title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
