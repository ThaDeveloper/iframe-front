/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from "react";
import jwt from "jsonwebtoken";
import PropTypes from "prop-types";
import UserContext from "../contexts/userContext";

const defaultUserState = {
    user: {
        name: "Guest"
    },
    loggedIn: true
};
    
export default function(Page) {
  class Auth extends Component {
    constructor(props) {
      super(props);
      this.state = {
          ...defaultUserState
        };
    }

    componentDidMount() {
      const { history } = this.props;
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        history.push("/login");
      } else {
        this.setState({ user, loggedIn: true });
      }
    }

    logout = () => {
      const { history } = this.props;
      localStorage.removeItem("user");
      this.setState({ ...defaultUserState });
      history.push("/login");
    };

    render() {
      const { user, loggedIn } = this.state;
      return (
        <UserContext.Provider value={{ user, loggedIn, logout: this.logout }}>
          <Page {...this.props} />
        </UserContext.Provider>
      );
    }
  }

  Auth.propTypes = {
      history: PropTypes.shape({
          push: PropTypes.func.isRequired
      }).isRequired
  }

  return Auth;
}
