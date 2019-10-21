import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuOption = ({ icon, label, route }) => (
  <li className="nav-item">
    <Link to={route} className="nav-link">
      <span className="pcoded-micon">
        <i className={`feather icon-${icon}`} />
      </span>
      <span className="pcoded-mtext">{label}</span>
    </Link>
  </li>
);

MenuOption.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default MenuOption;
