import { Link } from "react-router-dom";
import Centerer from "./AppUtils/Centerer";

const Home = () => {
  return (
    <Centerer fullScreen={true} border={false}>
      <Link
        to={"/employees"}
        className="flex p-10 m-10 shadow-md rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-101 hover:shadow-lg"
      >
        Manage All Employees
      </Link>
    </Centerer>
  );
};

export default Home;
