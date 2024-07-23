import "./App.css";
import Box from "./components/Box";
import ItemList from "./components/ItemList";

function App() {
  return (
    <>
      <h1 className="text-[48px] font-bold text-[#3d92a1]">Item List</h1>
      <Box />
      <ItemList />
    </>
  );
}

export default App;
