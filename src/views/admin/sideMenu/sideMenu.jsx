/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import MenuOption from "./menuOption";
import LogoSection from "./logoSection";

export default function SideMenu({ match }) {
  return (
    <nav className="pcoded-navbar">
      <div className="navbar-wrapper">
        <LogoSection />
        <div className="navbar-content scroll-div">
          <ul className="nav pcoded-inner-navbar">
            <li className="nav-item pcoded-menu-caption">
              <label>Navigation</label>
            </li>
            <MenuOption
              label="Checkout Form"
              route={`${match.url}/checkoutForm`}
              icon="home"
            />
            <MenuOption
              label="Statistics"
              route={`${match.url}/statistics`}
              icon="bar-chart"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

SideMenu.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};
