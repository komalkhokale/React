import React from "react";

const CardProject = ({ user }) => {
  return (
    <div className="flex items-center justify-baseline bg-[#111]">
      <div className="rounded shadow-lg w-40 px-2 py-2 bg-white h-auto m-3">
        {/* Background Image */}
        <div className="relative w-full">
          {/* Background Image */}
          <img
            src={user.backgroundImage}
            alt="background"
            className="w-full  object-cover rounded-lg"
          />

          {/* Profile Image */}
          <img
            src={user.image}
            alt={user.name}
            className="w-12 h-12 rounded-full border-2 border-pink-700 absolute -bottom-6.5 left-12 bg-white"
          />
        </div>

        {/* User Info */}
        <div className="mt-7 text-center">
          <h2 className="font-medium text-sm">{user.name}</h2>
        </div>

        <h3 className="text-[7px] mb-1 mt-1 text-gray-700 text-center">{user.bio}</h3>

        {/* Followers and Following */}
        <div className="flex justify-between text-center mt-3 mb-2 bg-gray-300 rounded px-1 py-1">
          <h2 className="text-[7px]">
            Likes <br />
            {user.likes}
          </h2>
          <h2 className="text-[7px]">
            Followers <br />
            {user.followers}
          </h2>
          <h2 className="text-[7px]">
            Following <br />
            {user.following}
          </h2>
        </div>

        <div className="flex justify-center text-gray-700 gap-2 mt-2">
          <i className="text-[10px] ri-instagram-line"></i>
          <i className="text-[10px] ri-telegram-2-line"></i>
          <i className="text-[10px] ri-threads-line"></i>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
