import "./App.css";
import { Landing } from "pages";
import React, { useEffect, useState } from "react";
import { Loader } from "components";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => setLoader(false));
  });
  return (
    <div className='App'>
      {loader ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Landing.Landing />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
