// import { useState } from 'react'
// import Axios from 'axios'
// import './Login.css'

// const Login = () => {

//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")

//     Axios.defaults.withCredentials = true

//     const login = () => {
//     Axios.post('http://localhost/users/login', {
//       username: username,
//       password: password
//     }).then((response) => {
//             console.log(response)
//         })
//   }

//     return (
//         <div className="login">
//             <div className="content">
//                 <p>Logo Goes Here</p>
//                 <form>
//                     <input type="text" placeholder="Email..." onChange={e => setUsername(e.target.value)}/>
//                     <input type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)}/>
//                     <input type="submit" value="Login" onClick={login}/>
//                 </form>
//                 <p>Don't have an account? <span className="signup">Sign up.</span> </p>
//             </div>
//         </div>
//     )
// }

// export default Login
