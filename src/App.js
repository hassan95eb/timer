import React, { useState } from "react";
import Clockshow from "./Components/Clockshow";

export default function App() {
  const [array, setArray] = useState([]);
  return (
    <div className="main">
      <Clockshow array={array} setArray={setArray} />
    </div>
  );
}
