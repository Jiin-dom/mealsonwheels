import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/style-t&c.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;
    const values = { email, password };
    // Handle form submission
    console.log(values);
  };

  render() {
    return (
      <div className="container-fluid min-vh-100 bg custom-font">
        <div className="row">
          <div className="col-md-4">
            <div className="welcome-register">
              <div className="image-holder">
                <img src="/images/merryOnwheels.png" alt="logo" />
              </div>
              <h4 className="text-muted ms-5 pt-1">Welcome Back</h4>
              <h2 className="ms-5 pt-2">Sign in to Meals On Wheels</h2>
            </div>
          </div>
          <div className="col-md-8 p-0">
            <div className="card rounded-top-left">
              <div className="card-header bg-transparent px-5 pt-5 m-5 border-1">
                <h5 className="text-muted text-end py-2 pb-4">
                  Do not have an account?{" "}
                  <Link to="/register" className="TC fw-bold">
                    Sign Up
                  </Link>
                </h5>
              </div>
              <div className="card-body mx-5 px-5">
                <div>
                  <h3 className="pb-5 mt-3 text-muted">Your account details</h3>
                </div>
                <div className="form-inner text-dark">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                      />
                      <label htmlFor="password">Password</label>
                    </div>

                    <div className="py-3 fs-5">
                      <div className="mt-5">
                        <Link to="#" className="TC fw-bold">Forgot your password?</Link>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent text-center mt-5 py-5 border-1">
                      <div className="mt-3">
                        <span className="fs-6 text-muted">
                          By continuing, you agree to the Merry on Wheels{" "}
                          <Link to="/termsandconditions" className="TC fw-bold">Terms and Conditions</Link>
                        </span>
                        <button
                          className="btn btn-outline btn-custom btn-lg btn-block ms-3"
                          type="submit"
                        >
                          Sign In
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

export default Login;
