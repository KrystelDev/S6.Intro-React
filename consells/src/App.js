import React, { Fragment, useState } from "react";
import WellcomePage from "./pages/WellcomePage";
import ScenesPage from "./pages/ScenesPage";
import Footer from "./components/Footer";

function App() {

  //Its the first time?
  let [firstTime, setFirstTime] = useState(true);

  //Get the current year
  const currantYear = new Date().getFullYear();

  function changeFirstTime() {
    firstTime = false;
    setFirstTime(firstTime);
  }

  return firstTime !== true ? (
    <Fragment>
      <ScenesPage currantYear={currantYear}  />
    </Fragment>
  ) : (
    <Fragment>
      <WellcomePage changeFirstTime={changeFirstTime} />
      <Footer currantYear={currantYear} />
    </Fragment>
  );
}

export default App;
