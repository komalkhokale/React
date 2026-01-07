import axios from "axios";
import React, { useState } from "react";
import UserCard from "./UserCard";

const Axioss = () => {
  const [allData, setAllData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setAllData(response.data);
    console.log(response.data)
  };

  return (
    <div>
      <button onClick={getData} className="bg-green-900 py-2 px-5">Get Data</button>
      <div className="flex flex-wrap gap-3">
      {allData.map(function (elem, idx) {
        return <div key={idx}>
          <UserCard elem={elem}/>
        </div>
      })}
      </div>
    </div>
  );
};

export default Axioss;
