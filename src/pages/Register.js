import { useState } from 'react'
import axios from 'axios'
import './Login.css'

// const BASE_URL = process.env.REACT_APP_BASE_URL;

const Register = () => {

    const [regEmail, setRegEmail] = useState("")
    const [regPassword, setRegPassword] = useState("")

    // axios.defaults.withCredentials = true

  const register = () => {
    axios.post("http://localhost/users/register", {
      email: regEmail,
      password: regPassword
    }).then((response) => {
      console.log(response);
    })
  }

  

    return (
        <div className="login">
            <div className="content">
                <p>Logo Goes Here</p>
                <p>Create an account.</p>
                <form>
                    <input type="text" placeholder="Email..." onChange={e => setRegEmail(e.target.value)}/>
                    <input type="password" placeholder="Password..." onChange={e => setRegPassword(e.target.value)}/>
                    <input type="submit" value="Register" onClick={register}/>
                </form>
            </div>
        </div>
    )
}

export default Register
