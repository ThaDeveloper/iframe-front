/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";
import Hightlight from "react-highlight";

import TokenAPI from "../../../api/TokenAPI";
import Loader from "../../../components/Spinner";
import AdminContext from "../../../contexts/adminContext";
import "./checkoutForm.scss";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      isLoading: false,
      error: false
    };
  }

  getNewToken = () => {
    const adminGlobal = this.context;

    adminGlobal.setContentLoading();
    this.setState({ isLoading: true });

    TokenAPI.getNewToken().then(response => {
      adminGlobal.setContentLoading(false);

      if (response.success) {
        this.setState({ isLoading: false, token: response.data.api_token });
      } else {
        this.setState({ isLoading: false, error: true });
      }
    });
  };

  renderIframeForm = () => (
    <div>
      <label htmlFor="iframe-section">IFrame Embed Code</label>
      <div className="iframe">
        <Hightlight>
          {`<form id="payment-form" action="${process.env.REACT_APP_API}api/checkout" onsubmit='submitForm(); return false;'>
    <input type="hidden"  name="payment_method_token" id="payment_method_token">

    <label for="full_name">Name</label>
    <input type="text" id="full_name" name="full_name"><br/>

    <label for="address">Address</label>
    <input type="text" id="address" name="address"><br/>

    <label for="company-tax">Company Tax</label>
    <input type="text" id="company-tax" name="company-tax"><br/>

    <label for="phone-number">Phone number</label>
    <input type="text" id="phone-number" name="phone-number"><br/>

    <input id="submit-button" type="submit" value="Pay Now" disabled>

</form>`}
        </Hightlight>
      </div>
      <br />
      <br />
      <label htmlFor="iframe-js-section">Submission script example</label>
      <div className="iframe-js">
        <Hightlight language="javascript">
          {`const submitForm = function() {
  // Set the token in the hidden form field
  const tokenField = document.getElementById("payment_method_token");
  tokenField.setAttribute("value", "payment_method_token" );

  // Submit the form
  const form = document.getElementById('payment-form');
  form.submit();
};`}
        </Hightlight>
      </div>
    </div>
  );

  renderAPITokenField = (token, error, isLoading) => (
    <div>
      <label htmlFor="api-token-section">API Token</label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="api-token"
          name="api-token"
          aria-describedby="api-token"
          value={token}
        />
        <div className="input-group-append">
          <button
            className="btn btn-success"
            type="button"
            onClick={this.getNewToken}
          >
            {isLoading ? <Loader size="small" /> : "Get Token"}
          </button>
        </div>
      </div>
      {error ? (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Failed to retrieve the API token. Please try again in a minute!
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : null}
    </div>
  );

  render() {
    const { token, isLoading, error } = this.state;

    return (
      <div className="page-wrapper">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>Checkout Form</h5>
              </div>
              <div className="card-body">
                {this.renderAPITokenField(token, error, isLoading)}
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h5>IFrame</h5>
              </div>
              <div className="card-body">{this.renderIframeForm()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CheckoutForm.propTypes = {};

CheckoutForm.contextType = AdminContext;

export default CheckoutForm;
