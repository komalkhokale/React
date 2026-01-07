import React, { useState } from "react";
import Card from "./Card";

const One = () => {
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [userDesc, setUserDesc] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(username, userDesc, userRole, imageURL);

    // const oldUsers = [...allUsers];

    // oldUsers.push({ username, userRole, userDesc, imageURL });

    // setAllUsers(oldUsers);

    setAllUsers([...allUsers, { username, userRole, imageURL, userDesc }]);

    setImageURL("");
    setUserDesc("");
    setUserRole("");
    setUsername("");
  };

  const deleteHandler = (idx) => {
    const copyUser = [...allUsers];

    copyUser.splice(idx, 1);

    setAllUsers(copyUser);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap"
      >
        <input
          className="border border-zinc-400 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter your name."
        />
        <input
          className="border border-zinc-400 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
          placeholder="Image Url"
        />
        <input
          className="border border-zinc-400 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
          placeholder="Enter Description"
        />
        <input
          className="border border-zinc-400 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          placeholder="Enter Role"
        />
        <button className="active:scale-[0.97] px-5 py-2 text-xl font-semibold text-white cursor-pointer bg-emerald-800 rounded m-2 w-[91.1%]">
          Create User
        </button>
      </form>
      <div className="px-4 py-10 flex flex-wrap gap-4">
      {allUsers.map(function (elem, idx) {
        return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>;
      })}
      </div>
    </div>
  );
};

export default One;
