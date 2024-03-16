import settingsIcon from "../assets/images/icon-settings.svg";
import close from "../assets/images/icon-close.svg";
import SettingsInput from "./SettingsInput";
import { useMyContext } from "../hooks/useMyContext";
import CheckedIcon from "../assets/images/checked.svg";
import Button from "./Button";
import { useState } from "react";
function Settings() {
    const myContext = useMyContext();
    // ამ მომენტში true იყოს მაგრამ, შედმდეგ false-ად უნდა გადავაკეთო.
    const [isOpen, setIsOpenSettings] = useState(false);
    return (
        <div className="">
            <img
                onClick={() => setIsOpenSettings(true)}
                className="m-auto block"
                src={settingsIcon}
                alt=""
            />
            {isOpen && (


                <div className="bg-white w-[327px] py-[20px] m-auto rounded-[12px]">
                    <div className="flex justify-between items-center px-[20px]">
                        <h2 className="text-[20px] font-bold">Settings</h2>
                        <img
                            className="cursor-pointer"
                            onClick={() => setIsOpenSettings(false)}
                            src={close}
                            alt=""
                        />
                    </div>
                    <div className="w-[100%] bg-[#E3E1E1] h-[1px] mt-[15px] mb-[20px]"></div>
                    <form action="" className="px-[20px]">
                        <h3 className="text-center font-bold text-[11px]">
                            TIME ( MINUTES )
                        </h3>
                        <div className="my-[30px] flex flex-col gap-[10px] items-center">
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
                        <div className="flex flex-col gap-[20px] my-[20px]">
                            <h2 className="font-bold  text-center uppercase text-[11px]">
                                font
                            </h2>

                            {/*need add hover border */}
                            <div className="flex justify-center gap-[10px] items-center group">
                                {Array.from({ length: 3 }, (_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => myContext?.setActiveFontColorIndex(index)}
                                        className={`group grid place-items-center w-[40px] h-[40px] cursor-pointer ${myContext?.activeFontColorIndex == index
                                            ? "bg-darkBlueBlack [&>span]:text-white [&>span]:font-bold"
                                            : "bg-ghostWhite [&>span]:text-darkBlueBlack [&>span]:font-semibold [&>span]:opacity-70"
                                            }  border-solid border-[4px] box-content  hover:outline-hawkesBlue hover:outline-[1px] hover:outline-double border-white h-[40px] rounded-[50%] grid  cursor-pointer`}
                                    >
                                        <span
                                            className={`text-[15px] ${index == 0
                                                ? "font-kumbh"
                                                : index == 1
                                                    ? "font-roboto"
                                                    : "font-monoSpace"
                                                }`}
                                        >
                                            Aa
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-[100%] bg-[#E3E1E1] h-[1px]"></div>
                        <div className="flex flex-col gap-[20px] mt-[20px]">
                            <h2 className="uppercase text-center text-[11px] font-bold">
                                color
                            </h2>
                            <div className="flex gap-[10px]  justify-center items-center">
                                {Array.from({ length: 3 }, (_, index) => (
                                    <div
                                        onClick={() => myContext?.setActiveColorIndex(index)}
                                        key={index}
                                        className={`${index == 0
                                            ? "bg-red"
                                            : index == 1
                                                ? "bg-tiffanyBlue"
                                                : "bg-purple"
                                            } w-[40px] border-solid border-[4px] box-content  hover:outline-hawkesBlue hover:outline-[1px] hover:outline-double border-white h-[40px] rounded-[50%] grid place-items-center cursor-pointer`}
                                    >
                                        {myContext?.activeColorIndex === index && (
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
                </div>
            )}
        </div>
    );
}

export default Settings;
