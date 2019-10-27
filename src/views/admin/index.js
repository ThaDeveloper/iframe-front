import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import CheckoutFormPage from "./checkoutForm";
import SideMenu from "./sideMenu";
import AdminContext from "../../contexts/adminContext";
import Loader from "../../components/Loader";
import Header from "./header";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contentLoading: false,
      setContentLoading: this.setContentLoading
    };
  }

  setContentLoading = (contentLoading = true) =>
    this.setState({ contentLoading });

  render() {
    const { match } = this.props;
    
    return (
      <AdminContext.Provider value={{ ...this.state }}>
        <Loader />
        <SideMenu match={match} />
        <Header />

        <div className="pcoded-main-container">
          <div className="pcoded-wrapper">
            <div className="pcoded-content">
              <div className="pcoded-inner-content">
                <div className="main-body">
                  <Switch>
                    <Route
                      exact
                      path={`${match.url}`}
                      component={() => <Redirect to={`${match.url}/checkoutForm`} />}
                    />
                    <Route
                      exact
                      path={`${match.url}/checkoutForm`}
                      component={CheckoutFormPage}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>

      </AdminContext.Provider>
    );
  }
}

Admin.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.shape({
      url: PropTypes.string.isRequired
  }).isRequired
};

export default Admin;
