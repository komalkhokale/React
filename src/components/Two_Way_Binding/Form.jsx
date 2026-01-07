import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  
  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(username);

    const oldUsers = [...allUsers]
    oldUsers.push(username)

    setAllUsers(oldUsers)

    console.log(oldUsers)

    // setAllUsers([...allUsers, username])

    setUsername("");
  };

  return (
    <div
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className="bg-[#333] px-3 py-2 rounded"
    >
      <form className="m-4">
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
          className="border px-2 py-1 outline-none border-gray-500 rounded"
          type="text"
          placeholder="Enter name"
        />
        <br />
        <button className="px-3 py-1 cursor-pointer bg-gray-500 rounded mt-3">
          Submit
        </button>
      </form>

      {allUsers.map((elem) => {
        return <h1>Hello, {elem}</h1>
      })}
    </div>
  );
};

export default Form;
