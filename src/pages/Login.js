import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import URLogo from "../assets/URLogo_finished.png";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = ({ user, setUser }) => {
  const history = useHistory();

  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const obj = JSON.stringify({
        email: userEmail,
        password: password,
      });
      const reg = await fetch(`${BASE_URL}/users/login`, {
        mode: "cors",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: obj,
      });
      const data = await reg.json();
      console.log(data);
      setUser({ email: data.user.email, token: data.token });
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="content_login">
        <img className="logo" src={URLogo} alt="UrbanRoots Logo" />
        <p>Log In</p>
        <form>
          <input
            type="text"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" onClick={handleLogin} />
        </form>
        <p>
          Don't have an account?{" "}
          <span className="signup">
            <Link to="/register">Sign up.</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
