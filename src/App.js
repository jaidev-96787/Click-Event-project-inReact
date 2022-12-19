import React, { useState } from "react";
import "./App.css";

const App = () => {
  const purple = "#8e44ad";
  const red = "red";

  const [getdata, setdata] = useState(purple);
  const [getname, setname] = useState("Click me");

  const onClickHandler = () => {
    let newdata = "#34495e";
    setdata(newdata);
    setname("Ouch!!!!!");
  };
  const onDBClickHandler = () => {
    setdata(red);
    setname("Thanks for Updated");
  };

  return (
    <div style={{ backgroundColor: getdata }}>
      <button onClick={onClickHandler} onDoubleClick={onDBClickHandler}>
        {getname}
      </button>
    </div>
  );
};

export default App;
