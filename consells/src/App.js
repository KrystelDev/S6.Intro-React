import React, { useState } from "react";
import WellcomePage  from "./pages/WellcomePage";
import ScenesPage from './pages/ScenesPage';

function App() {
  
  let [firstTime, setFirstTime] = useState(true)

  function changeFirstTime() {
    setFirstTime(false);
    console.log("funcio: " + firstTime)
  }
  console.log(firstTime)
  return (firstTime !== true ? (
    <ScenesPage />
  ) : (
    <WellcomePage changeFirstTime={changeFirstTime} />
  ));
}

export default App;
