import React, { useState } from "react";
import Washroom from "./Washroom";

const ConditionalRendering = () => {
  const [gender, setGender] = useState("male");

  function changeGender() {
    if (gender == "male") {
      return setGender("female");
    } else {
      return setGender("male");
    }
  }

  return (
    <div className="">
      <h1>{gender}</h1>
      <button
        onClick={changeGender}
        className="bg-teal-600 mt-3 cursor-pointer active:scale-[0.9] px-3 py-1 rounded"
      >
        Change Gender
      </button>

      <Washroom user={gender}/>
      {/* {gender == "male" ? <Men /> : <Women />} */}
    </div>
  );
};

export default ConditionalRendering;
