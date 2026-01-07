import React from "react";

const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className=" p-4 flex mt-3 rounded justify-between items-center">
      <h1 className="text-3xl">{props.title}.</h1>
      <div className="flex space-x-7 text-2xl">
        {props.links.map((e, idx) => {
            return <h4 key={idx}>{e}</h4>
        })}
      </div>
    </div>
  );
};

export default Navbar;
