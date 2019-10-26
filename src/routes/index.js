import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "../views/index";
import SignUpPage from "../views/signup";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/signup" component={SignUpPage} />
    </Switch>
  </Router>
);
