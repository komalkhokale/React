// import React from "react";

// const Card = ({ user, marks, city }) => {
//   // Props is a object that holds all the attributes passed to the component
//   // ANd we can't use props as a child
//   return (
//     <div className="bg-green-600 m-2 py-3 px-5 rounded shadow-lg w-fit">
//      <h1 className="font-light">Name: {user}, Marks: {marks}, City: {city}</h1>
//     </div>
//   );
// };

// export default Card;

import React from "react";

const Card = (props) => {
  return (
    <div className="bg-green-600 m-2 py-3 px-5 rounded shadow-lg w-fit">
      <h1 className="font-light">{props.user}</h1>
    </div>
  );
};

export default Card