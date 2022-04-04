import { useNavigate } from 'react-router-dom'
import Button from '../AppUtils/Button';

const DemoLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginUser = {
      _id: '62183672fe76c4271819c360',
    };

    const res = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    });
    const { user, token } = await res.json();

    if (!res.ok) {
      window.alert("Sorry, an unexpected error occurred.");
    }

    localStorage.setItem("MY_PERSONNEL_ACCESS_TOKEN", token);
    localStorage.setItem("MY_PERSONNEL_USER_ID", user._id ?? 'taylor');
    navigate('/employees')
  };

  return (
    <Button
      text={"Demo"}
      onClick={handleLogin}
    />
  );
};

export default DemoLogin;
