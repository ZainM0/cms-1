import React from 'react'

const aboutus = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Crime Management System</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactus">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section id="about" className="bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About Us</h2>
            <p className="text-muted">Learn more about our Crime Management System:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h4 className="card-title text-muted text-uppercase text-center">Our Mission</h4>
                <p className="card-text">To provide efficient and effective tools for managing crime data and supporting law enforcement agencies.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h4 className="card-title text-muted text-uppercase text-center">Our Vision</h4>
                <p className="card-text">To create safer communities through innovative crime management solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-muted text-uppercase text-center">Our Team</h4>
                <p className="card-text">Our team consists of dedicated professionals passionate about leveraging technology to combat crime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default aboutus