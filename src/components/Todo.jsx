import React, { useRef, useState } from "react";

import TodoItems from "./TodoItems";

import todo_icon from "../assets/todo_icon.png";

const Todo = () => {

    const [todoList, setTodoList] = useState([]);

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === "") return null;
        
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {
        setTodoList((prev) => { return prev.filter((item) => item.id !== id)});
    }

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* Title */}
      <div className="flex item-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="Logo" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* Input */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent outline-none border-0 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add a task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* Todo List */}
      <div className="">
        {todoList.map((item, index) => {
            return (
              <TodoItems
                key={index}
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}
                deleteTodo={deleteTodo}
              />
            );
        })}

      </div>
    </div>
  );
};

export default Todo;
