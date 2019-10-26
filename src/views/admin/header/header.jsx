/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import UserContext from "../../../contexts/userContext"

function Header() {
  return (
    <UserContext.Consumer>
      {value => (
        <header className="navbar pcoded-header navbar-expand-lg navbar-light">
          <div className="m-header">
            <a className="mobile-menu" id="mobile-collapse1" href="#!">
              <span />
            </a>
            <a href="index.html" className="b-brand">
              <div className="b-bg">
                <i className="feather icon-trending-up" />
              </div>
              <span className="b-title">Checkout Form</span>
            </a>
          </div>
          <a className="mobile-menu" id="mobile-header" href="#!">
            <i className="feather icon-more-horizontal" />
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li>
                <div className="dropdown drp-user">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="icon feather icon-settings" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right profile-notification">
                    <div className="pro-head">
                      <img
                        src="assets/images/user/avatar-1.jpg"
                        className="img-radius"
                        alt="User-Profile"
                      />
                      <span>{value.user.name}</span>
                      <a
                        href="auth-signin.html"
                        className="dud-logout"
                        title="Logout"
                        onClick={() => value.logout() }
                      >
                        <i className="feather icon-log-out" />
                      </a>
                    </div>
                    <ul className="pro-body">
                      {/* <li>
                    <a href="#!" className="dropdown-item">
                      <i className="feather icon-settings" /> Settings
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="dropdown-item">
                      <i className="feather icon-user" /> Profile
                    </a>
                  </li> */}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </header>
      )}
    </UserContext.Consumer>
  );
}

Header.propTypes = {};

export default Header;
