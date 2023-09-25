import React from "react";
import "./login.css";
import logo from '../../assets/logo.png'
const Login = () => {
  return (
    <div className="containerl">
      <header className="row text-center">
        <div className="col logo">
          <img
            src={logo}
            alt="ved-ai"
          />
        </div>
      </header>
      <main className="main row">
        <div className="left col">
          <img
            src="https://img.freepik.com/premium-vector/young-woman-enjoy-sitting-reading-book-hygge-concept-vector-illustration_194708-2078.jpg"
            alt="girl-reading-a-book"
          />
        </div>
        <div className="right col">
          <form className="sign-up">
            <h4>Discover Wellness</h4>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Create a password"
              />
            </div>
            <button type="submit" className="btn submit-btn">
              Create account
            </button>
          </form>
          <p className="hr-lines"> OR </p>
          <div className="social-sign-up">
            <button className="btn social">
              <i className="fa-brands fa-google" /> Sign up with Google
            </button>
          </div>
          <div className="sign-in">
            <p>
              Already have an account? <a href="/">Log in</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
