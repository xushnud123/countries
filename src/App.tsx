import "./App.css";
import React, { useEffect, useState } from "react";
import { Loader } from "components";
import RoutesComponent from "routes";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => setLoader(false));
  });
  return (
    <div className='App'>
      {/* {loader ? (
        <Loader />
      ) : ( */}
      <React.Fragment>
        <RoutesComponent />
      </React.Fragment>
    </div>
  );
}

export default App;
