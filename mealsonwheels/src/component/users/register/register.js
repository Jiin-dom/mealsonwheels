import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/css/style-register.css";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      email: "",
      firstNameError: "",
      lastNameError: "",
      addressError: "",
      phoneNumberError: "",
      emailError: "",
      password: "",
      passwordValid: false,
      passwordLengthValid: false,
      passwordUpperCaseValid: false,
      passwordLowerCaseValid: false,
      passwordNumberValid: false,
      passwordSymbolValid: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if (this.state[name + "Error"]) {
      this.setState({ [name + "Error"]: "" });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation on form submission
    const form = event.target;

    // Check form validity using the built-in checkValidity() method
    if (form.checkValidity()) {
      console.log("Form submitted successfully");
      // Perform further actions (e.g., submit to server)
    } else {
      // Display error messages by calling the reportValidity() method
      form.reportValidity();
      console.log("Invalid form");
    }
    const { firstName, lastName, address, phoneNumber, email } = this.state;
    const nameRegex = /^[A-Za-z\s]+$/; // Only alphabets and space allowed
    const phoneNumberRegex = /^\d{11}$/; // 11 digits required
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

    let isFormValid = true;

    if (!nameRegex.test(firstName.trim())) {
      this.setState({ firstNameError: "Invalid first name" });
      isFormValid = false;
    } else {
      this.setState({ firstNameError: "" });
    }

    if (!nameRegex.test(lastName.trim())) {
      this.setState({ lastNameError: "Invalid last name" });
      isFormValid = false;
    } else {
      this.setState({ lastNameError: "" });
    }

    if (address.trim() === "") {
      this.setState({ addressError: "Address is required" });
      isFormValid = false;
    } else {
      this.setState({ addressError: "" });
    }

    if (!phoneNumberRegex.test(phoneNumber.trim())) {
      this.setState({ phoneNumberError: "Invalid phone number" });
      isFormValid = false;
    } else {
      this.setState({ phoneNumberError: "" });
    }

    if (!emailRegex.test(email.trim())) {
      this.setState({ emailError: "Invalid email address" });
      isFormValid = false;
    } else {
      this.setState({ emailError: "" });
    }

    if (isFormValid) {
      // Form is valid, perform further actions (e.g., submit to server)
      console.log("Form submitted successfully");
    } else {
      // Display error messages or handle invalid form
      console.log("Invalid form");
    }
  };

  handlePasswordChange = (event) => {
    const password = event.target.value;
    const passwordLengthValid = password.length >= 12;
    const passwordUpperCaseValid = /[A-Z]/.test(password);
    const passwordLowerCaseValid = /[a-z]/.test(password);
    const passwordNumberValid = /[0-9]/.test(password);
    const passwordSymbolValid = /[!@#$%^&*]/.test(password);
    const passwordValid =
      passwordLengthValid &&
      passwordUpperCaseValid &&
      passwordLowerCaseValid &&
      passwordNumberValid &&
      passwordSymbolValid;
    this.setState({
      password,
      passwordValid,
      passwordLengthValid,
      passwordUpperCaseValid,
      passwordLowerCaseValid,
      passwordNumberValid,
      passwordSymbolValid,
    });
  };

  render() {
    const {
      firstName,
      lastName,
      address,
      phoneNumber,
      email,
      firstNameError,
      lastNameError,
      addressError,
      phoneNumberError,
      emailError,
    } = this.state;
    const {
      password,
      passwordValid,
      passwordLengthValid,
      passwordUpperCaseValid,
      passwordLowerCaseValid,
      passwordNumberValid,
      passwordSymbolValid,
    } = this.state;

    let passwordInputClass = "form-control";
    if (password !== "" && !passwordValid) {
      passwordInputClass += " is-invalid";
    }

    return (
      <div className="container-fluid min-vh-100 bg custom-font">
        <div className="row">
          <div className="col-md-4">
            <div className=" welcome-register">
              <div className="image-holder">
                <img
                  src="/images/merryOnwheels.png"
                  alt="logo"
                  className=""
                />
              </div>
              <div className="custome-font">
                <h4 className="text-muted ms-5 pt-1">Welcome to Meals On Wheels</h4>
                <h2 className="ms-5 pt-2">Create Your Account</h2>
              </div>
            </div>
          </div>
          <div className="col-md-8 p-0">
            <div className="card rounded-top-left">
              <div className="card-header bg-transparent px-5 pt-5 m-5 border-1">
                <h5 className="text-muted text-end py-2 pb-4">
                  Already have an account?{" "}
                  <Link to="/login" className="TC fw-bold">
                    Login
                  </Link>
                </h5>
              </div>
              <div className="card-body p-0 mx-5">
                <div>
                  <h3 className=" ms-5 text-muted">Your account details</h3>
                </div>
                <div className="form-inner text-dark px-5 mt-4">
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col">
                        <div className="form-group form-floating mb-3">
                          <input
                            type="text"
                            className={`form-control ${
                              firstNameError ? "is-invalid" : ""
                            }`}
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleInputChange}
                            placeholder="Enter your First Name"
                          />
                          <label htmlFor="firstName">First Name</label>
                          {firstNameError && (
                            <div className="invalid-feedback">
                              {firstNameError}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col">
                        <div className="form-group form-floating mb-3">
                          <input
                            type="text"
                            className={`form-control ${
                              lastNameError ? "is-invalid" : ""
                            }`}
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleInputChange}
                            placeholder="Enter your Last Name"
                          />
                          <label htmlFor="lastName">Last Name</label>
                          {lastNameError && (
                            <div className="invalid-feedback">
                              {lastNameError}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="form-group form-floating mb-3">
                      <input
                        type="text"
                        className={`form-control ${
                          phoneNumberError ? "is-invalid" : ""
                        }`}
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.handleInputChange}
                        placeholder="Enter your Phone Number"
                      />
                      <label htmlFor="phoneNumber">Phone Number</label>
                      {phoneNumberError && (
                        <div className="invalid-feedback">
                          {phoneNumberError}
                        </div>
                      )}
                    </div>

                    <div className="form-group form-floating mb-3">
                      <input
                        type="text"
                        className={`form-control ${
                          addressError ? "is-invalid" : ""
                        }`}
                        id="address"
                        name="address"
                        value={address}
                        onChange={this.handleInputChange}
                        placeholder="Enter your Address"
                      />
                      <label htmlFor="address">Address</label>
                      {addressError && (
                        <div className="invalid-feedback">{addressError}</div>
                      )}
                    </div>

                    <div className="form-group form-floating mb-3">
                      <input
                        type="email"
                        className={`form-control ${
                          emailError ? "is-invalid" : ""
                        }`}
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                        placeholder="Enter your Email"
                      />
                      <label htmlFor="email">Email Address</label>
                      {emailError && (
                        <div className="invalid-feedback">{emailError}</div>
                      )}
                    </div>

                    <div className="form-group form-floating mb-3">
                      <input
                        type="password"
                        className={passwordInputClass}
                        id="floatingPassword"
                        placeholder="Enter your Password"
                        onChange={this.handlePasswordChange}
                      />
                      <label htmlFor="floatingInput">Password</label>
                    </div>

                    <div className="password-validation-box">
                      <div className="password-validation">
                        <p className="px-3">Your password must have:</p>
                        <ul>
                          <li
                            className={passwordLengthValid ? "check" : "wrong"}
                          >
                            {passwordLengthValid ? "✓" : "✕"} At least 12
                            characters
                          </li>
                          <li
                            className={
                              passwordUpperCaseValid ? "check" : "wrong"
                            }
                          >
                            {passwordUpperCaseValid ? "✓" : "✕"} 1 upper-case
                            letter
                          </li>
                          <li
                            className={
                              passwordLowerCaseValid ? "check" : "wrong"
                            }
                          >
                            {passwordLowerCaseValid ? "✓" : "✕"} 1 lower-case
                            letter
                          </li>
                          <li
                            className={passwordNumberValid ? "check" : "wrong"}
                          >
                            {passwordNumberValid ? "✓" : "✕"} 1 number
                          </li>
                          <li
                            className={passwordSymbolValid ? "check" : "wrong"}
                          >
                            {passwordSymbolValid ? "✓" : "✕"} 1 symbol
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent py-5 mt-5 border-1">
                      <div className="">
                        <span className="fs-6 text-muted">
                          By continuing, you agree to the Merry on Wheels{" "}
                          <Link to="/termsandconditions" className="TC fw-bold">Terms and Conditions</Link>
                        </span>
                        <button
                          className="btn btn-outline btn-custom btn-lg ms-3"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
