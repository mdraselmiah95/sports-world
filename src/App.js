import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Sports from "./components/Sports/Sports";
import TeamDetails from "./components/TeamDetails/TeamDetails";
const userContext = createContext();
function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]}>
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
      </userContext.Provider>
    </div>
  );
}

export default App;
