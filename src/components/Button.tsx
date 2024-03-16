import { useMyContext } from "../hooks/useMyContext"

function Button() {
    const myContext = useMyContext();
    console.log(myContext?.activeButtonIndex);
    console.log(myContext?.activeButton)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        myContext?.setSavedStates({ ...myContext.savedStates, pomodoroValue: myContext?.pomodoroValue, shortBreakValue: myContext?.shortBreakValue, longBreakValue: myContext.longBreakValue });
        // if (myContext?.activeButtonIndex === 0) {
        //     myContext?.setActiveButton(myContext.savedStates.pomodoroValue)
        // } else if (myContext?.activeButtonIndex === 1) {
        //     myContext?.setActiveButton(myContext.savedStates.shortBreakValue)
        // } else if (myContext?.activeButtonIndex === 2) {
        //     myContext?.setActiveButton(myContext.savedStates.longBreakValue);
        // }
    }
    // console.log(myContext?.savedStates)
    return (
        <button onClick={(e) => handleClick(e)} className='text-white bg-red absolute  translate-x-[-50%] translate-y-[-50%] top-[58px] left-[50%]  py-[14.5px] px-[50px] rounded-[25px] font-bold text-[16px]'>Apply</button>
    )
}

export default Button
