import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details">
            <TeamDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
