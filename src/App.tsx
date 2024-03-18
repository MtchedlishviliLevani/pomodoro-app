import Header from "./components/Header";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import { useState } from "react";
import { useMyContext } from "./hooks/useMyContext";

function App() {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isCounting, setIsCounting] = useState(false)
  const myContext = useMyContext();

  return (
    <div className={`w-[100%] ${myContext?.savedStates.activeFont} min-h-[100vh]`}>

      {isOpenSettings && <div className="w-[100%] h-[100vh] bg-[#1e213f] opacity-50 absolute z-[99]"></div>}
      <div className="container mx-auto px-[2.5%]">
        <Header isCounting={isCounting} />
        <div className="mt-[40px]">
          <Timer setIsCounting={setIsCounting} isCounting={isCounting} />
        </div>
        <div className="mt-[50px] ">
          <Settings setIsOpenSettings={setIsOpenSettings} isOpenSettings={isOpenSettings} />
        </div>
      </div>
    </div>
  );
}

export default App;
