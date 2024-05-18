import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-bezier"
              ></svg>
            </span>
            <span>Crime Management System</span>
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-5"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-5">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Tutorial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Report a Crime
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  View Statistics
                </a>
              </li>
            </ul>
            <a className="btn btn-primary ms-md-2" role="button" href="#">
              Log In
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
