import { useState } from 'react'
import axios from 'axios'
import './Login.css'
import URLogo from "../assets/URLogo_finished.png"

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Register = () => {

    const [regUsername, setRegUsername] = useState("")
    const [regPassword, setRegPassword] = useState("")

    axios.defaults.withCredentials = true

  const register = () => {
    axios.post(`${BASE_URL}/users/register`, {
      username: regUsername,
      password: regPassword
    }).then((response) => {
      console.log(response)
    })
  }

    return (
        <div className="login">
            <div className="content_login">
            <img className="logo" src={URLogo} alt="UrbanRoots Logo"/>
                <p>Create an account.</p>
                <form>
                    <input type="text" placeholder="Email..." onChange={e => setRegUsername(e.target.value)}/>
                    <input type="password" placeholder="Password..." onChange={e => setRegPassword(e.target.value)}/>
                    <input type="submit" value="Register" onClick={register}/>
                </form>
            </div>
        </div>
    )
}

export default Register
