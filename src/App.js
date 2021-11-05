
import './App.css';
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from "./components/Navbar";
import Basket from './pages/Basket';
import Questions from './pages/Questions';



function App() {
  return (
    <Router className="App">
    <NavBar />
      <Switch>
        <Route exact path="/home" component={Homepage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/Basket" component={Basket}/>
        <Route exact path="/Questions" component={Questions}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </Router>

  );
}






export default App;