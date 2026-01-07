// import React from 'react'

// const Card = (props) => {
//   return (
//     <div className='bg-cyan-700 mt-1 px-5 py-4 rounded w-fit text-white'>
//         <h1 className='text-2xl font-semibold'>Hello, {props.name}!</h1>
//         <h1 className='text-2xl font-semibold'>Age: {props.age}!</h1>
//     </div>
//   )
// }

// export default Card

import React from "react";

const Card = (props) => {
  return (
    <div className="bg-cyan-700 w-40 mt-1 px-5 py-4 rounded text-white flex h-40 items-center justify-center ">
        <h1 className="text-2xl">
            {props.name}
        </h1>
    </div>
  );
};

export default Card;
