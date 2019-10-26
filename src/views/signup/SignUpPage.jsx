import React, { Component } from "react";
import PropTypes from "prop-types";
import AuthenticationAPI from "../../api/AuthenticationAPI";
import '../../assets/css/style.css';

const ERROR_MESSAGES = {
  username:
    "Enter a username with more than 3 characters. Start with a letter and no spaces in between the characters.",
  email: "Invalid email address",
  password:
    "Password must be more than 7 characters and at least 1 lowercase 1 uppercase 1 number, 1 special character"
};

const VALIDATION_REGEX = {
  username: /^[a-zA-Z][a-zA-Z0-9]{3,}$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
};

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitError: "",
      errors: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      data: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { data } = this.state;

    if (this.isFormValid()) {
      AuthenticationAPI.signup(data).then(response => {
        if (response.success) history.push("/login");
        else {
          let submitError = "";
          switch (response.status) {
            case 400:
              submitError =
                "User registration failed. Please fill in valid inputs!";
              break;
            default:
              submitError = "User registration failed. Please try again later!";
              break;
          }

          this.setState({ submitError });
        }
      });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    const { errors, data } = this.state;
    errors[name] =
      value.match(VALIDATION_REGEX[name]) === null ? ERROR_MESSAGES[name] : "";
    data[name] = value;
    this.setState({ errors, data });
  };

  handleConfirmPassword = e => {
    const { errors, data } = this.state;
    const { value } = e.target;
    errors.confirmPassword =
      value !== "" && data.password !== value ? "Passwords do not match." : "";
    data.confirmPassword = value;

    this.setState({ data, errors });
  };

  isFormValid = () => {
    const { errors, data } = this.state;
    return !Object.values({ ...errors, ...data }).findIndex(
      value => value !== ""
    );
  };

  render() {
    const { errors, submitError } = this.state;

    return (
      <div className="auth-wrapper">
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
              <h3 className="mb-4">Sign up</h3>
              <div className="input-group mb-3">
                <input
                  autoComplete="off"
                  placeholder="Username"
                  className="form-control"
                  type="text"
                  name="username"
                  id="username"
                  onChange={this.handleChange}
                  required
                />
                {errors.username ? <p>{errors.username}</p> : ""}
              </div>
              <div className="input-group mb-3">
                <input
                  autoComplete="off"
                  placeholder="johndoe@email.com"
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
                {errors.email ? <p>{errors.email}</p> : ""}
              </div>

              <div className="input-group mb-3">
                <input
                  autoComplete="off"
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
                {errors.password ? <p>{errors.password}</p> : ""}
              </div>

              <div className="input-group mb-3">
                <input
                  autoComplete="off"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  className="form-control"
                  onChange={this.handleConfirmPassword}
                  required
                />
                {errors.confirmPassword ? <p>{errors.confirmPassword}</p> : ""}
              </div>

              {submitError ? <p>{submitError}</p> : ""}
              <button type="submit" className="btn btn-primary shadow-2 mb-4">
                Sign up
              </button>
              <p className="mb-0 text-muted">
                Allready have an account? <a href="auth-signin.html"> Log in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default SignUpPage;
