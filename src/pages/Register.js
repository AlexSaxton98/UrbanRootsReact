import { useState } from 'react'
import Axios from 'axios'
import './Login.css'

const Register = () => {

    const [regUsername, setRegUsername] = useState("")
    const [regPassword, setRegPassword] = useState("")

    Axios.defaults.withCredentials = true

  const register = () => {
    Axios.post('http://localhost/users/register', {
      username: regUsername,
      password: regPassword
    }).then((response) => {
      console.log(response)
    })
  }

    return (
        <div className="login">
            <div className="content">
                <p>Logo Goes Here</p>
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
