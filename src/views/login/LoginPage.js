import React, { Component } from "react";
import PropTypes from "prop-types";
import AuthenticationAPI from "../../api/AuthenticationAPI";
import '../../assets/css/style.css';
import './login.scss';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitError: "",
      errors: {
        username: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      data: {
        username: "",
        email: "",
        password: "",
        confirm_password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { data } = this.state;
    if (true) {
      AuthenticationAPI.authorizeUser('login', data).then(response => {
        if (response.success) {
            localStorage.setItem('token', response.content.data.token);
            history.push("/");
        }
        else {
          let submitError = "";
          switch (response.error.response.status) {
            case 400:
              submitError = response.error.response.data.error;
              break;
            default:
              submitError = "User login failed. Please try again later!";
              break;
          }
          this.setState({ submitError, errors: response.error.response.data});
        }
      });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    const { errors, data } = this.state;
    data[name] = value;
    this.setState({ errors, data });
  };

  handleConfirmPassword = e => {
    const { errors, data } = this.state;
    const { value } = e.target;
    errors.confirm_password =
      value !== "" && data.password !== value ? "Passwords do not match." : "";
    data.confirm_password = value;

    this.setState({ data, errors });
  };

  render() {
    const { errors, submitError } = this.state;
    const { history } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-user-plus auth-icon">r</i>
              </div>
              <h3 className="mb-4">Log in</h3>
              <div className="input-group mb-3">
                <input
                  autoComplete="on"
                  placeholder="Email"
                  className="form-control"
                  type="text"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                  
                />
              </div>
                {errors.username ? <p className="signup-input-error">{errors.username}</p> : ""}
             
                {errors.email ? <p className="signup-input-error">{errors.email}</p> : ""}

              <div className="input-group mb-3">
                <input
                  autoComplete="on"
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  onChange={this.handleChange}
                  
                />
              </div>
                {errors.password ? <p className="signup-input-error">{errors.password}</p> : ""}

        
              {submitError ? <p className="signup-input-error">{submitError}</p> : ""}
              <button type="submit" className="btn btn-primary shadow-2 mb-4">
                Log In
              </button>
              <p className="mb-0 text-muted">
                Don't have an account? <a className='login-signup-link' onClick={ () => history.push('/signup')}> Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default LoginPage;
