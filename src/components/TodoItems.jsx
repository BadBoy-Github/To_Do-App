import React from "react";

import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import { MdDelete } from "react-icons/md";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={() => {
          toggle(id);
        }}
      >
        <img src={isComplete ? tick : not_tick} alt="box" className="w-6" />
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""} `}>
          {text}
        </p>
      </div>

      <MdDelete
        onClick={() => {
          deleteTodo(id);
        }}
        className="size-5 cursor-pointer text-orange-600 hover:text-orange-700 hover:scale-90 active:text-orange-600 active:scale-100 transition-all duration-200"
      />
    </div>
  );
};

export default TodoItems;
