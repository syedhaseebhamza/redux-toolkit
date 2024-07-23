import React from "react";

function Box() {
  return (
    <div className="border border-gray-700 px-4 py-5">
      <div className="flex items-center justify-between">
        <div className="text-[20px] font-medium text-[#2d3258]">
          haseeb hamza
        </div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Add
        </button>
      </div>
    </div>
  );
}

export default Box;
