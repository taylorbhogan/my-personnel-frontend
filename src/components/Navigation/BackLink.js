import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowLeftCircleFill } from "react-icons/bs";

const BackLink = () => {
  const [backHover, setBackHover] = useState(false);

  const location = useLocation()

  const upOneLevel = locationPathname => {
    let endIdx = locationPathname.length - 1;

    while (locationPathname[endIdx] !== '/'){
      endIdx--;
    }

    return locationPathname.slice(0, endIdx);
  }

  return (
    <Link
      to={upOneLevel(location.pathname)}
      onMouseEnter={() => setBackHover(true)}
      onMouseLeave={() => setBackHover(false)}
    >
      {backHover ? (
        <BsArrowLeftCircleFill size={32} />
      ) : (
        <BsArrowLeftCircle size={32} />
      )}
    </Link>
  );
};

export default BackLink;
