import settingsIcon from "../assets/images/icon-settings.svg";
import close from "../assets/images/icon-close.svg";
import SettingsInput from "./SettingsInput";
import { useMyContext } from "../hooks/useMyContext";
import CheckedIcon from "../assets/images/checked.svg";
import Button from "./Button";


interface Props {
    setIsOpenSettings: React.Dispatch<React.SetStateAction<boolean>>;
    isOpenSettings: boolean;
}

function Settings({ setIsOpenSettings, isOpenSettings }: Props) {
    const myContext = useMyContext();
    console.log(myContext?.savedStates.activeFont)

    const colors = ["#F87070", "#70F3F8", "#D881F8"];
    const fonts = ["font-kumbh", "font-roboto", "font-monoSpace"];

    function activeFonthandleClick(i: number) {
        myContext?.setActiveFont(fonts[i]);
    }

    function activeColorhandleClick(i: number) {
        myContext?.setActiveColor(colors[i]);
    }
    return (
        <>
            <div className="">
                <img
                    onClick={() => setIsOpenSettings(true)}
                    className="m-auto block cursor-pointer"
                    src={settingsIcon}
                    alt=""
                />
                {isOpenSettings && (
                    <div className="bg-white w-[327px] md:w-[588px] py-[20px] m-auto rounded-[12px] z-[99] absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] ">
                        <div className="flex justify-between items-center px-[50px]">
                            <h2 className="text-[20px] font-bold">Settings</h2>
                            <img
                                className="cursor-pointer"
                                onClick={() => setIsOpenSettings(false)}
                                src={close}
                                alt=""
                            />
                        </div>
                        <div className="w-[100%] bg-[#E3E1E1] h-[1px] mt-[15px] mb-[20px]"></div>
                        <form action="" className="px-[20px] md:px-[50px]">
                            <h3 className="text-center md:text-left font-bold text-[11px] md:text-[13px]">
                                TIME ( MINUTES )
                            </h3>
                            <div className="my-[30px] flex flex-col gap-[10px] items-center md:flex-row md:justify-between">
                                <SettingsInput
                                    heading="pomodoro"
                                    inputValue={myContext?.pomodoroValue}
                                    setInputValue={myContext?.setPomodoroValue}
                                />
                                <SettingsInput
                                    heading="short break"
                                    inputValue={myContext?.shortBreakValue}
                                    setInputValue={myContext?.setShortBreakValue}
                                />
                                <SettingsInput
                                    heading="long break"
                                    inputValue={myContext?.longBreakValue}
                                    setInputValue={myContext?.setLongBreakValue}
                                />
                            </div>
                            <div className="w-[100%] bg-[#E3E1E1] h-[1px]"></div>
                            <div className="flex flex-col gap-[20px] my-[20px] md:flex-row md:items-center md:justify-between">
                                <h2 className="font-bold  text-center uppercase text-[11px] md:text-[13px] md:tracking-[7px]">
                                    font
                                </h2>

                                <div className="flex justify-center gap-[10px] items-center group">
                                    {fonts.map((font, index) => (
                                        <div
                                            className={`${myContext?.activeFont == font ? "bg-darkBlueBlack [&>span]:text-white [&>span]:font-bold" : "bg-ghostWhite [&>span]:text-darkBlueBlack [&>span]:font-semibold [&>span]:opacity-70"} group  place-items-center  cursor-pointer border-solid border-[4px] box-content  hover:outline-hawkesBlue hover:outline-[1px] hover:outline-double border-white w-[40px] h-[40px] rounded-[50%] grid  cursor-pointe`}
                                            key={index}
                                            onClick={() => activeFonthandleClick(index)}
                                        >
                                            <span className={`text-[15px] ${font}`}>Aa</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-[100%] bg-[#E3E1E1] h-[1px]"></div>

                            <div className="flex flex-col gap-[20px] mt-[20px] md:flex-row md:items-center md:justify-between">
                                <h2 className="uppercase text-center text-[11px] font-bold md:text-[13px] md:tracking-[7px]">
                                    color
                                </h2>
                                <div className="flex gap-[10px]  justify-center items-center">
                                    {colors.map((color, index) => (
                                        <div
                                            key={index}
                                            onClick={() => activeColorhandleClick(index)}
                                            style={{ background: color }}
                                            className={`  w-[40px] border-solid border-[4px] box-content  hover:outline-hawkesBlue hover:outline-[1px] hover:outline-double border-white h-[40px] rounded-[50%] grid place-items-center cursor-pointer`}
                                        >
                                            {color === myContext?.activeColor && (
                                                <img src={CheckedIcon} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative w-[100%] h-[40px]">
                                <Button />
                            </div>
                        </form>
                    </div >
                )
                }
            </div >
        </>
    );
}

export default Settings;
