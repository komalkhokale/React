// import React from 'react'

// const App = () => {

//   // const arr = [54, 56, 210, 98, 45, 78, 32, 11, 9, 5];
//   return (
//     <div>
//       {/* {arr.filter((e) => {
//         return e > 33;
//       })} */}
//     </div>
//   )
// }

// export default App

import React from "react";
import Card from "./components/Card";

const App = () => {
  const users = ["komal", "Ram", "Sita", "Krish", "Arjun", "Radha"];

  return (
    <div className="bg-[#111] flex gap-2 text-white h-screen w-full p-10">
      {/* {Card (5, 10)} */}
      {/* <Card name="komal" age={22}/>  
     <Card name="Krish" age={25} /> */}

      {/* <Card name="Komal" /> */}

      {users.map((elem) => {
        return <Card name={elem} />;
      })}
    </div>
  );
};

export default App;
