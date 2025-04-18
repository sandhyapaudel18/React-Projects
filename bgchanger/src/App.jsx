import React, { useState } from "react";
const App = () => {
  const [changer, setChanger] = useState("black");

  const changing = (color) => {
    setChanger(color);
  };
  return (
    <div
      className=" h-1000 w-dvw flex flex-column justify-center"
      style={{ backgroundColor: changer }}
    >
      <div className="bg-white h-20 w-200 flex flex-row items-center justify-between rounded-2xl text-amber-50 ">
        <button
          onClick={() => changing("red")}
          className="bg-red-500 h-10 w-[150PX] m-1 rounded-2xl text-amber-50 "
        >
          Red
        </button>
        <button
          className="bg-amber-300 h-10 w-[150PX] m-1 rounded-2xl text-amber-50"
          onClick={() => changing("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-blue-700 h-10 w-[150PX] m-1 rounded-2xl text-amber-50"
          onClick={() => changing("blue")}
        >
          Blue
        </button>
        <button
          className="bg-black h-10 w-[150PX] m-1 rounded-2xl text-amber-50"
          onClick={() => changing("black")}
        >
          Black
        </button>
        <button
          className="bg-pink-500 h-10 w-[150PX] m-1 rounded-2xl text-amber-50"
          onClick={() => changing("pink")}
        >
          Pink
        </button>
        <button
          className="bg-red-500 h-10 w-[150PX] m-1 rounded-2xl text-amber-50"
          onClick={() => changing("orange")}
        >
          Orange
        </button>
        <button
          className="bg-purple-600 h-10 w-[150PX] m-1 rounded-2xl text-amber-50"
          onClick={() => changing("purple")}
        >
          Lavender
        </button>
      </div>
    
    </div>
  );
};
export default App;
