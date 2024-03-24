import React from "react";

const TodoList = () => {
  return (
    <ul className="space-y-3">
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span>散歩</span>
        <div>
          <button>edit</button>
          <button>Delete</button>
        </div>
      </li>
      TodoList
    </ul>
  );
};

export default TodoList;