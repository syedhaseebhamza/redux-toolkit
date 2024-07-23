import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../store/slices/ItemSlice";

function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const handleDeleteItem = (index) => {
    dispatch(deleteItem(index));
  };
  return (
    <div className="mt-4">
      <h2 className="text-[24px] font-bold">Item List</h2>
      <ul className="flex flex-col gap-3">
        {items.map((item, index) => (
          <li key={index} className="text-[20px] font-medium text-[#2d3258]">
            <div className="flex items-center">
              {item}
              <button
                onClick={() => handleDeleteItem(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 ml-4 border border-red-700 rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
