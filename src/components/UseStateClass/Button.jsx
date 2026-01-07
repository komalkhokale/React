// import React, { useState } from "react";

// const Button = () => {
//   const [num, setNum] = useState(0);
//   return (
//     <div>
//       <div className="h-40 w-40 bg-cyan-600 rounded mb-10">{num}</div>

//       <button
//         className="px-4 py-2 bg-pink-700 rounded"
//         onClick={() => {
//           const rdm = Math.floor(Math.random() * 100);
//           setNum(rdm);
//         }}
//       >
//         Click
//       </button>
//     </div>
//   );
// };

// export default Button;


import React, { useState } from 'react'

const Button = () => {
    const arr =["Komal", "Krishna", "Radha", "Ram", "Sita"];

    const [num, setNum]=useState(0)

  return (
    <div>
        <h1>{arr[num]}</h1>
        <button
        onClick={() => { 
            if(num < arr.length-1){
                setNum(num + 1)
            }
        }}
        >change User</button>
    </div>
  )
}

export default Button