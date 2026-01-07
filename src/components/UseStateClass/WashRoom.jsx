import React from "react";

const Washroom = (props) => {
  const isMale = props.user === "male";

  return (
    <div
      className={`w-fit px-4 py-2 rounded mt-5 ${
        isMale ? "bg-blue-800" : "bg-pink-800"
      }`}
    >
      {props.user} Washroom
    </div>
  );
};

export default Washroom;
