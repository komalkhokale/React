// import React from "react";
// import Card from "./components/Card";
// const App = () => {
//   // const user = "Komal"
//   // const arr = ["Komal", "ram", "Krishana", "Radha"]

//   return (
//     // <div>
//     //   {arr.map(function(elem){
//     //     return <h1>{elem}</h1>
//     //   })}
//     // </div>
//     // <div>{Card("Komal")}</div>
//     // <div className="bg-[#111] min-h-screen text-white w-full p-10">
//     //   <Card user ="Komal" marks={90} city="New York"/>
//     //   <Card user ="Krishna" marks={90} city="New York"/>
//     //   <Card user ="Radha" marks={85} city="Los Angeles"/>
//     //   <Card user ="Ram" marks={88} city="Chicago"/>
//     //   <Card user ="Sita" marks={92} city="San Francisco"/>
//     // </div>
//   );
// };

// export default App;

// import React from 'react'
// import Card from './components/Card'

// const App = () => {

//   const users = ["Komal", "Krishna", "Radha", "Ram", "Sita"]

//   return (
//     <div>
//       {users.map((elem) => {
//         return <Card user={elem}/>;
//       })}
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import FollowersCard from './components/props/FollowersCard'
// import Navbar from './components/props/Navbar'

// const App = () => {
//   return (
//     <div className='bg-[#111] h-screen'>
//       {/* <FollowersCard /> */}
//       <Navbar title="Komal." color='green' links={["Home", "About", "Contact"]}/>
//       <Navbar title="Apple." color='Black' links={["IPhone", "Mac", "IPad", "Store"]}/>
//     </div>
//   )
// }

// export default App

// Conditional Rendering Example
import React from "react";
import WashRoom from "./components/ConditionalRendering/WashRoom";
import FunctionCall from "./components/ConditionalRendering/FunctionCall";
import UseState from "./components/UseStateClass/UseState";
import Button from "./components/UseStateClass/Button";
import ChangeValueInArray from "./components/UseStateClass/changeValueinArray";
import ConditionalRendering from "./components/UseStateClass/ConditionalRendering";
import Form from "./components/Two_Way_Binding/Form";
import One from "./components/LocalStorage/One";
import Axioss from "./components/class_09_API/Axioss";
import UseEffects from "./components/class10/UseEffects";

const App = () => {
  return (
    <div className="bg-[#111] min-h-screen p-10 text-white">
     {/* <WashRoom /> */}
     {/* <FunctionCall /> */}
     {/* <UseState /> */}

     {/* <Button /> */}
     {/* <ChangeValueInArray /> */}
     {/* <ConditionalRendering /> */}

     {/* <Form /> */}

     <One />

     {/* <Axioss />  */}
     {/* <UseEffects /> */}
    </div>

  );
};

export default App;
