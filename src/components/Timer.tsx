import { useState, useEffect } from "react";
import { useMyContext } from "../hooks/useMyContext";

function Timer() {
    const myContext = useMyContext();
    const [isCounting, setIsCounting] = useState(false);

    const [milliSeconds, setMiliSeconds] = useState<number | undefined>(
        myContext?.activeButton && myContext.activeButton * 60000
    );


    useEffect(() => {
        setMiliSeconds(myContext?.activeButton && myContext.activeButton * 60000);
    }, [myContext?.activeButton]);

    useEffect(() => {
        if (isCounting) {
            const countDownSeconds = setInterval(() => {
                setMiliSeconds((prevSeconds) => {
                    if (prevSeconds === 0) {
                        clearInterval(countDownSeconds);
                        setIsCounting(false);
                        setMiliSeconds(myContext?.activeButton ?? 0 * 60000)
                    }
                    return prevSeconds && prevSeconds - 10;
                });
            }, 10);
            return () => clearInterval(countDownSeconds);
        }
    }, [isCounting, milliSeconds, myContext]);

    const minutes = Math.floor((milliSeconds ?? 0) / 60000);
    const remainingSeconds = Math.floor(((milliSeconds ?? 0) / 1000) % 60);
    const totalSeconds = (myContext?.activeButton ?? 0) * 60000;

    const progressPercentage =
        ((totalSeconds - (milliSeconds || 0)) / totalSeconds) * 100;




    const startNstopClick = () => {
        setIsCounting((start) => !start);

    };
    return (
        <div
            style={{
                background: "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
            }}
            className="relative z-40 shadow-custom grid place-items-center w-[300px] h-[300px] lg:w-[370px] lg:h-[370px] rounded-[50%] m-auto"
        >
            <svg className="absolute rotate-[270deg] z-[41]" viewBox="0 0 100 100">
                <circle className="stroke-[3px] "
                    cx="50"
                    cy="50"
                    r="40.8"
                    strokeLinecap="round"
                    strokeDasharray={256}
                    strokeDashoffset={-256 * (progressPercentage / 100)}
                    fill="none"
                    stroke={myContext?.savedStates.activeColor}
                ></circle>
            </svg>
            <div
                className="grid place-items-center  rounded-[50%] w-[267px] h-[267px] lg:w-[340px] sm:w-[270px] lg:h-[340px] border-solid border-[8px] lg:border-[15px] border-darkBlueBlack "
            >
                <div className="w-[250px] lg:w-[290px] h-[250px] lg:h-[290px]   bg-darkBlueBlack rounded-[50%] grid place-items-center gap-[15px]">
                    <div className="flex flex-col relative z-50">
                        <h3 className="text-[80px] lg:text-[100px] font-bold text-hawkesBlue">
                            {minutes.toString().padStart(2, "0")}:
                            {remainingSeconds.toString().padStart(2, "0")}
                        </h3>
                        <span
                            onClick={startNstopClick}
                            className="hover:text-red cursor-pointer font-bold text-[16px] text-center tracking-[7px] text-hawkesBlue uppercase"
                        >
                            {isCounting ? "Pause" : "Start"}
                        </span>
                        <h1></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer;
