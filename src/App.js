import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Test } from "./components/pages/Test";
import { Test2 } from "./components/pages/Test2";
import { Login } from "./components/pages/Login";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Test" component={Test} />
            <Route path="/Test2" component={Test2} />
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;