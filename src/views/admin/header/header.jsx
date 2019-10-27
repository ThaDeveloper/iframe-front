/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
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
                  <a className="dropdown-toggle" data-toggle="dropdown">
                    <i className="icon feather icon-settings" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right profile-notification">
                    <div className="pro-head">
                      <i className="icon feather icon-user mr-1" />
                      <span>{value.user.username}</span>
                      <span
                        role="button"
                        className="dud-logout"
                        title="Logout"
                        onClick={() => value.logout()}
                      >
                        <i className="feather icon-log-out" />
                      </span>
                    </div>
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
