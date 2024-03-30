import React from "react";
import { useContext } from "react";
import someContext from "../CreateContext";

export default function TimeLine(props) {
  const context = useContext(someContext);
  return (
    <div className="main-list">
      {context.array.map((c) => {
        return <div key={c.index}>{c}</div>;
      })}
    </div>
  );
}
