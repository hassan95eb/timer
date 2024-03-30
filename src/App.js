import React, { useState } from "react";
import someContext from "./CreateContext";
import Clockshow from "./Components/Clockshow";

export default function App() {
  const [array, setArray] = useState([]);
  return (
    <div className="main">
      <someContext.Provider value={{ array: array, setArray: setArray }}>
        <Clockshow />
      </someContext.Provider>
    </div>
  );
}
