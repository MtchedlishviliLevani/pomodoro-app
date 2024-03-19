import React from 'react'
import arrowUp from "../assets/images/icon-arrow-up.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
interface InputProps {
    heading: string | undefined;
    inputValue: number | undefined;
    setInputValue: React.Dispatch<React.SetStateAction<number>> | undefined;
}

function SettingsInput({ heading, inputValue, setInputValue }: InputProps) {
    // increase by one function
    const increaseByOne = (setState: React.Dispatch<React.SetStateAction<number>> | undefined) => {
        if (setState) {
            setState(state => state + 1)
        }
    }

    // decrease by one function 
    const decreaseByOne = (setState: React.Dispatch<React.SetStateAction<number>> | undefined) => {
        if (setState) setState(state => (state > 0 ? state - 1 : state));
    }
    return (
        <div className="flex gap-[6px] justify-between items-center md:flex-col md:items-start">
            <label
                className="font-bold text-darkBlueBlack font-kumbh text-[12px] md:text-[13px]  opacity-45"
                htmlFor=""
            >
                {heading}
            </label>
            <div className="flex items-center bg-ghostWhite pl-[10px] w-[140px] py-[8px] rounded-[8px] ">
                <input
                    className="bg-inherit text-darkBlueBlack font-bold outline-none w-[100px] "
                    type="number" value={inputValue} minLength={2} min={1} onChange={(e) => {
                        const inputValue = e.target.valueAsNumber;
                        if (!isNaN(inputValue) && inputValue >= 0 && setInputValue) {
                            setInputValue(inputValue);
                        }
                    }}
                />
                <div className=" w-[15px] flex flex-col gap-[6px]">
                    <img className='cursor-pointer cu' src={arrowUp} alt="" onClick={() => increaseByOne(setInputValue)} />
                    <img className="cursor-pointer" src={arrowDown} onClick={() => decreaseByOne(setInputValue)} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SettingsInput
