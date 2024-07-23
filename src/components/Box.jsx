import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/ItemSlice";

function Box() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handelAddItems = () => {
    if (name) {
      dispatch(addItem(name));
      setName("");
    }
  };
  return (
    <div className="border border-gray-700 px-4 py-5">
      <div className="flex items-center justify-between">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="text-[20px] font-medium text-[#2d3258] border p-2 rounded"
        />
        <button
          onClick={handelAddItems}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Box;
