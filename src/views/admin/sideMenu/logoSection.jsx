import React from 'react';
import { Link } from "react-router-dom"; 

export default function LogoSection() {
    return (
      <div className="navbar-brand header-logo">
        <Link to="/admin" className="b-brand">
          <div className="b-bg">
            <i className="feather icon-trending-up" />
          </div>
          <span className="b-title">Payment Checkout</span>
        </Link>
        <a className="mobile-menu" id="mobile-collapse" href="#!">
          <span />
        </a>
      </div>
    );
}
