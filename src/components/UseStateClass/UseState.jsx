import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1 className="px-4 mb-6 py-2 rounded w-fit border-2 border-cyan-500">
        {count}
      </h1>
      <button
        className="bg-pink-700 rounded cursor-pointer px-4 py-1 active:scale-[0.9]"
        onClick={increaseCount}
      >
        Increase
      </button>

      <button
        className="bg-green-700 ml-2 rounded cursor-pointer px-4 py-1 active:scale-[0.9]"
        onClick={decreaseCount}
      >
        Decrease
      </button>
    </div>
  );
};

export default UseState;
