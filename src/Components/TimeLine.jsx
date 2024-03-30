import React from "react";
import { useContext } from "react";
import someContext from "../CreateContext";

export default function TimeLine(props) {
  const context = useContext(someContext);
  function handleDeleteItem(e) {
    context.setArray(context.array.filter((t) => t !== e.target.innerHTML));
  }
  return (
    <div className="main-list">
      {context.array.map((c) => {
        return (
          <div
            className="item-mainList"
            onClick={handleDeleteItem}
            key={c.index}
          >
            {c}
          </div>
        );
      })}
    </div>
  );
}
