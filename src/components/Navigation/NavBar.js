import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeLink from "./HomeLink";
import LogoutButton from "../Auth/LogoutButton";
import BackLink from "./BackLink";
import DemoLogin from "../Auth/DemoLogin";

const NavBar = ({ setEmployees }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const levelCount = (pathName) => {
    let count = 0;

    for (let char of pathName) {
      if (char === "/") count++;
    }
    return count;
  };

  const buttonStyle =
    "border-2 rounded-lg px-3 py-1 border-sky-500 hover:bg-sky-500 hover:text-white";

  return (
    <nav className="absolute top-0 w-full p-6 flex justify-between">
      <div className="flex gap-4 items-center">
        {pathname !== "/" && <HomeLink />}
        {levelCount(pathname) >= 2 && <BackLink />}
      </div>
      <div className="flex gap-4 items-center">
        <Link className={buttonStyle} to="login">
          Log In
        </Link>
        <DemoLogin />
        <LogoutButton setEmployees={setEmployees} />
      </div>
    </nav>
  );
};

export default NavBar;
