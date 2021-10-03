import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Sports from "./components/Sports/Sports";
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
          <Route path="/sports">
            <Sports />
          </Route>
          <Route path="/details/:teamId">
            <TeamDetails />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
