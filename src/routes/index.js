import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import IndexPage from "../views/index";
import SignUpPage from "../views/signup";
import LoginPage from "../views/login";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ProtectedRoutes(IndexPage)} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  </Router>
);
