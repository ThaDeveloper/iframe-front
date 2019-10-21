<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> - create react app
import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";

export default class Dashboard extends Component {
<<<<<<< HEAD
render() {
  const { user } = this.props;
  return (
    <div className="App">
      <header className="App-header">
        <p> Welcome
         { user ? <span> {user.userdata.username}</span> : null}
        </p>
        <a>
          DashBoard

        </a>
      </header>
    </div>
  );

};

=======
  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {" "}
            Welcome
            {user ? <span> {user.userdata.username}</span> : null}
          </p>
          <a>DashBoard</a>
        </header>
      </div>
    );
  }
}
>>>>>>> - create react app
