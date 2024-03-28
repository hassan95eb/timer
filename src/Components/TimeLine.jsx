import React from "react";

export default function TimeLine(props) {
  return (
    <div className="main-list">
      {props.array.map((c) => {
        return <div key={c.index}>{c}</div>;
      })}
    </div>
  );
}
