import React from "react";
// import Signup from './Signup';
import { Navigate } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };

    this.onChange = this.onChange.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  SubmitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;

    if (username === "anshuli@gmail.com" && password === "chitade") {
      localStorage.setItem("token", "ghfdgdgfgh");
      this.setState({
        loggedIn: true,
      });
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Navigate to="/gallery" />;
    }
    return (
      <div
        class="d-flex align-items-center bg-auth border-top border-top-2 border-primary"
        style={{ display: "block" }}
      >
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5 align-self-center">
              <h1 class="display-4 text-center mb-3">Login</h1>

              <p class="text-muted text-center mb-5">
                Free access to our dashboard.
              </p>

              <form onSubmit={this.SubmitForm}>
                <div class="form-group">
                  <label class="form-label">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="name@address.com"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Password</label>

                  <div class="input-group input-group-merge">
                    <input
                      class="form-control"
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <button class="btn btn-lg w-100 btn-primary mb-3 mt-3">
                  Login
                </button>
              </form>
            </div>
            <div class="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
              <div
                class="bg-cover h-100 min-vh-100 mt-n1 me-n3"
                style={{ backgroundColor: "url(F:/react_mui/assignment_b/src/images/frontpage.jpg)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
