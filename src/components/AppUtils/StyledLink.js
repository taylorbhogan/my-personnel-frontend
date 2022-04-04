import { Link } from "react-router-dom";

const StyledLink = ({ to, options, text }) => {
  return (
    <Link className={`${options} cursor-pointer hover:underline`} to={to}>
      {text}
    </Link>
  );
};

export default StyledLink;
