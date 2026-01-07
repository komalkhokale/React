import React from "react";

const FunctionCall = () => {
  const handleClick = () => {
    console.log("Button Clicked!");
  };
  return (
    <div>
      <button
        className="bg-green-700 px-5 py-2 rounded cursor-pointer active:scale-[0.9]"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default FunctionCall;
