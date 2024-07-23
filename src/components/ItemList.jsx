import React from "react";
import { useSelector } from "react-redux";
function ItemList() {
  const items = useSelector((state) => state.items);
  return (
    <div className="mt-4">
      <h2 className="text-[24px] font-bold">Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-[20px] font-medium text-[#2d3258]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
