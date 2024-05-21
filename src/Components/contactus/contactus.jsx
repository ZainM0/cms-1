import React from 'react'
import './contactus.css';
import Navbar from "../Nav/Navbar";
const contactus = () => {
  return (
    <div>
<div> <div className="navbar"> <Navbar /> </div>

    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-center">Contact Us</h2>
          <p className="text-muted text-center mb-5">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" style={{color: 'black'}} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" style={{color: 'black'}} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" style={{color: 'black'}}></textarea>
            </div>
            <button type="submit" className="btn btn-dark btn-lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default contactus