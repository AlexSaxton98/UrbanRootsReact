
import './App.css';
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router className="App">
    <NavBar />
      <Switch>
        <Route exact path="/home" component={Homepage}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>

  );
}

export default App;