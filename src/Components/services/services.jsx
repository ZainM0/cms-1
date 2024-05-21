import React from 'react'

const services = () => {
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

      <section id="services" className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Services</h2>
              <p className="text-muted">We offer the following services to help manage crime effectively:</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h4 className="card-title text-muted text-uppercase text-center">Crime Reporting</h4>
                  <p className="card-text">Report crimes online to authorities for prompt action.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h4 className="card-title text-muted text-uppercase text-center">Crime Analysis</h4>
                  <p className="card-text">Analyze crime data to identify patterns and trends for better decision making.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title text-muted text-uppercase text-center">Victim Support</h4>
                  <p className="card-text">Provide support services to victims of crime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     </div> 
  )
}

export default services