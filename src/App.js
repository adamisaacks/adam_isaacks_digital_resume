import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navi from "./components/Navbar";
import Home from "./pages/home";
import ReactGA from "react-ga";

ReactGA.initialize("UA-191997244-1");
ReactGA.pageview("/");

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navi />
        <Switch>
          <Route path="/" exact component={Home} />
          <h1>
            <i className="fas fa-exclamation-triangle"></i>
            IF YOU SEE THIS YOU ARE WRONG!
            <i className="fas fa-exclamation-triangle"></i>
          </h1>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
