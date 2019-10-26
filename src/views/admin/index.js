import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Route, Switch } from "react-router-dom";
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
    const { history, match } = this.props;
    return (
      <AdminContext.Provider value={{ ...this.state }}>
        <Loader />
        <SideMenu match={match} />
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path={`${match.url}/check`}
              component={() => history.push("/checkoutForm")}
            />
            <Route exact path="/checkoutForm" component={CheckoutFormPage} />
          </Switch>
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
