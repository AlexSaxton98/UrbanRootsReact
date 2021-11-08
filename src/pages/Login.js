import { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { Link } from 'react-router-dom'
import URLogo from "../assets/URLogo_finished.png"

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    axios.defaults.withCredentials = true

    const login = () => {
    axios.post(`${BASE_URL}/users/login`, {
      email: email,
      password: password
    }).then((response) => {
            console.log(response)
        })
  }

    return (
        <div className="login">
            <div className="content_login">
                <img className="logo" src={URLogo} alt="UrbanRoots Logo"/>
                <p>Log In</p>
                <form>
                    <input type="text" placeholder="Email..." onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)}/>
                    <input type="submit" value="Login" onClick={login}/>
                </form>
                <p>Don't have an account? <span className="signup"><Link to='/register'>Sign up.</Link></span> </p>
            </div>
        </div>
    )
}

export default Login
