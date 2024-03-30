import React, { useState } from "react";
import Clockshow from "./Components/Clockshow";
import TimeLine from "./Components/TimeLine";
import someContext from "./CreateContext";

export default function App() {
  const [array, setArray] = useState([]);
  return (
    <div className="main">
      <someContext.Provider value={{ array, setArray }}>
        <Clockshow />
        <TimeLine />
      </someContext.Provider>
    </div>
  );
}
