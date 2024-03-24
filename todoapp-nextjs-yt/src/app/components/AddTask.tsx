import React from "react";

const AddTask = () => {
  return (
    <form className="mb-4 space-y-3">
      <input
        type="text"
        className="w-full border px-4 py-2 rounded-1g focus:outline-none focus:border-blue-400" />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95">
        AddTask
      </button>
    </form>
  );
};

export default AddTask;