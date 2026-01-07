import React from "react";
import Men from "./Men";
import Women from "./Women";

const WashRoom = () => {
  const user1 = {
    name: "Komal",
    age: 22,
    gender: "Female",
  };

  const user2 = {
    name: "Krishna",
    age: 22,
    gender: "Male",
  };

  const user3 = {
    name: "baby",
    age: 8,
    gender: "Male",
  };

  return (
    <div>
      {/* <Men />
      <Women /> */}
      {user1.gender == "Male" ? user1.age > 10 ? <Men /> : <Women /> : <Women />}
    </div>
  );
};

export default WashRoom;
