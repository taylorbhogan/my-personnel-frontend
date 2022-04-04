import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";

const HomeLink = () => {
  const [homeHover, setHomeHover] = useState(false);

  return (
    <div>
      <Link
        to={"/"}
        onMouseEnter={() => setHomeHover(true)}
        onMouseLeave={() => setHomeHover(false)}
      >
        {homeHover ? <BsHouseDoorFill size={32} /> : <BsHouseDoor size={32} />}
      </Link>
    </div>
  );
};

export default HomeLink;
