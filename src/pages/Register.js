import { useState } from "react";
import "./Login.css";
import URLogo from "../assets/URLogo_finished.png";
import { useHistory } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Register = () => {
  const history = useHistory();
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const register = async (e) => {
    console.log("got here 1");
    e.preventDefault();
    try {
      console.log("got here 2");
      const obj = JSON.stringify({
        email: regEmail,
        password: regPassword,
      });
      console.log(obj);
      const res = await fetch(`${BASE_URL}/users/register`, {
        mode: "cors",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: obj,
      });
      const data = await res.json();
      console.log(data);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="content_login">
        <img className="logo" src={URLogo} alt="UrbanRoots Logo" />
        <p>Create an account.</p>
        <form>
          <input
            type="text"
            placeholder="Email..."
            on
            onChange={(e) => setRegEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setRegPassword(e.target.value)}
          />
          <input type="submit" value="Register" onClick={register} />
        </form>
      </div>
    </div>
  );
};

export default Register;
