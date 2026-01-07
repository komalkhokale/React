import React, { useState } from "react";

const ChangeValueInArray = () => {
  const [marks, setMarks] = useState([85, 89, 88, 67, 43, 24]);

  function graceStudent() {
    const newMarks = marks.map((elem) => {
      if (elem > 95) {
        return elem;
      } else {
        return elem + 5;
      }
    });
    setMarks(newMarks);
  }

  return (
    <div>
      {marks.map((e, idx) => {
        return (
          <h1 key={idx}>
            Marks of student {idx + 1} {e} ({e > 33 ? "Pass" : "Fail"})
          </h1>
        );
      })}

      <button
        className="px-4 py-2 rounded bg-cyan-700 mt-3 cursor-pointer active:scale-[0.9]"
        onClick={graceStudent}
      >
        Give them Grace
      </button>
    </div>
  );
};

export default ChangeValueInArray;
