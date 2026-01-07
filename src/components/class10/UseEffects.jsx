// import React, { useEffect, useState } from 'react'

// const UseEffects = () => {

//     const [title, setTitle] = useState('')

//     useEffect(() => {
//         console.log("Use Effect Running...!");

//     },[])

//   return (
//     <div>
//         <input className='py-3 px-10 border-2 border-zinc-100' type="text" value={title} onChange={(e) => {
//             setTitle(e.target.value)
//         }}/>
//     </div>
//   )
// }

// export default UseEffects

import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffects = () => {
  // const [allData, setAllData] = useState([])

  // const getData = async () => {
  //     const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
  //     setAllData(response.data.results);
  // }

  const [username, setUserName] = useState("");

  const getData = async () => {
    const response = await axios.get("https://randomuser.me/api");
    setUserName(response.data.results[0].name.first);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>{username}
  <button onClick={() => {
    
  }}>CLick</button>
  </div>;
};

export default UseEffects;
