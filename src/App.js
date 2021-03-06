import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CountryDetails from "./Components/CountryDetails/CountryDetails";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/countryDetails/:nm">
            <CountryDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
