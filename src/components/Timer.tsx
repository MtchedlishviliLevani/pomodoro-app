import { useState, useEffect } from "react";
import { useMyContext } from "../hooks/useMyContext";

function Timer() {
    const myContext = useMyContext();
    const [isCounting, setIsCounting] = useState(false);




    // new code
    const [seconds, setSeconds] = useState<number | undefined>(
        myContext?.activeButton && myContext.activeButton * 60
    );

    useEffect(() => {
        setSeconds(myContext?.activeButton && myContext.activeButton * 60);
    }, [myContext?.activeButton]);

    useEffect(() => {
        if (isCounting) {
            const countDownSeconds = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 0) {
                        clearInterval(countDownSeconds);
                        return 0;
                    }
                    return prevSeconds && prevSeconds - 1;
                });
            }, 1000);
            return () => clearInterval(countDownSeconds);
        }
    }, [isCounting, seconds]);

    const minutes = Math.floor((seconds ?? 0) / 60);
    const remainingSeconds = (seconds ?? 0) % 60;
    const totalSeconds = ((myContext?.activeButton ?? 0) * 60);

    const progressPercentage =
        ((totalSeconds - (seconds || 0)) / totalSeconds) * 100;
    console.log(totalSeconds + "totalSeconds");
    console.log(remainingSeconds + "remSeconds")

    const startNstopClick = () => {
        setIsCounting((start) => !start);
    };
    return (
        <div
            style={{
                background: "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
            }}
            className=" shadow-custom grid place-items-center w-[370px] h-[370px] rounded-[50%] m-auto"
        >
            <div
                style={{
                    background: `conic-gradient(transparent ${progressPercentage}%, #F87070 0%)`,
                }}
                className="relative before:content-[''] before:w-[3px] before:h-[3px] before:bg-white before:absolute grid place-items-center  rounded-[50%]  w-[340px] h-[340px] border-solid border-[15px] border-darkBlueBlack "
            >


                <div className="w-[290px] h-[290px] bg-darkBlueBlack rounded-[50%] grid place-items-center gap-[15px]">
                    <div className="flex flex-col">
                        <h3 className="text-[100px] font-bold text-hawkesBlue">
                            {minutes.toString().padStart(2, "0")}
                            :
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
