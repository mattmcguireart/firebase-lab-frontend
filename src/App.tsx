import React from "react";
import "./App.css";
import HomeRoute from "./componets/HomeRoute";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ShoutOutToRoute from "./componets/ShoutOutToRoute";
import Header from "./componets/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeRoute />
        </Route>
        <Route path="/user/:name">
          <ShoutOutToRoute />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
