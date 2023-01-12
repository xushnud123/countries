import "./App.css";
import React, { useEffect, useState } from "react";
import { Loader } from "components";
import Routes from "routes/routes";

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
        <Routes />
      </React.Fragment>
    </div>
  );
}

export default App;
