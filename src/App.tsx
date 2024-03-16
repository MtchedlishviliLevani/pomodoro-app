import Header from "./components/Header";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import MyContextProvider from "./components/context/MyContextProvider";

function App() {

  return (
    <>
      <MyContextProvider>
        <div className="container mx-auto">
          <Header />
          <div className="mt-[40px]">
            <Timer />
          </div>
          <div className="mt-[80px]">
            <Settings />
          </div>
        </div>
      </MyContextProvider>
    </>
  );
}

export default App;
