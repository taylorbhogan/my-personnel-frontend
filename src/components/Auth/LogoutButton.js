import { useNavigate } from "react-router-dom";
import Button from "../AppUtils/Button";

const LogoutButton = ({ setEmployees }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setEmployees({});
    navigate("/");
  };

  return (
    <Button
      text={"Log Out"}
      onClick={handleLogout}
      color={"red"}
    />
  );
};

export default LogoutButton;
