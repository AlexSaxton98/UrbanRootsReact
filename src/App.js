import './App.css';
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router className="App">
    {/* Navbar here */}
      <Switch>
        <Route exact path="/home" component={Homepage}/>
      </Switch>
    </Router>
  );
}

export default App;
