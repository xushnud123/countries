import React, { useEffect, useState } from "react";
import Routes from "routes/routes";

import "./App.css";

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
      <>
        <Routes />
      </>
    </div>
  );
}

export default App;
