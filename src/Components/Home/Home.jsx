import React, { useState } from 'react';
import './Home.css';
import crime from "../../Components/Assets/Images/crime.jpg"
import jail from "../../Components/Assets/Images/jail.jpg"
import justice from "../../Components/Assets/Images/justice.jpeg";
import images from "../../Components/Assets/Images/images.jpeg";


function Home() {
    const [activeLink, setActiveLink] = useState("Home");

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

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
                            <li className={`nav-item ${activeLink === "Home" ? "active" : ""}`} onClick={() => handleSetActiveLink("Home")}>
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className={`nav-item ${activeLink === "About Us" ? "active" : ""}`} onClick={() => handleSetActiveLink("About Us")}>
                                <a className="nav-link" href="/aboutus">About Us</a>
                            </li>
                            <li className={`nav-item ${activeLink === "Contact Us" ? "active" : ""}`} onClick={() => handleSetActiveLink("Contact Us")}>
                                <a className="nav-link" href="/contactus">Contact Us</a>
                            </li>
                            <li className={`nav-item ${activeLink === "Services" ? "active" : ""}`} onClick={() => handleSetActiveLink("Services")}>
                                <a className="nav-link" href="/services">Services</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container" id='spacer'>
                <br />
            </div>
            
            <div className="image">
    <img src={justice} className="img-fluid responsive-image" alt="Justice" />
    <img src={images} className="img-fluid responsive-image" alt="Images" />
    <img src={crime} className="img-fluid responsive-image" alt="Crime" />
    <img src={jail} className="img-fluid responsive-image" alt="Jail" />
</div>

                
                <div className="grid">
                    <div className="text-center">
                        <h1 className="display-3"><mark>In Emergency Contact 6361134523</mark> </h1>
                        <br />

                        <div className='card my-4 card-body cardbody-color p-lg-5'>
                        <h2 className="grid">Sign Up or Log In</h2>
                        <a href="/signup" className="btn btn-dark m-2">Sign Up</a>
                        <a href="/login" className="btn btn-light m-2">Login</a>
                        <a className="btn btn-light m-2" href="/Adminlogin">Admin Login</a>
                        </div>

                    </div>
                </div>
           
        </div>
    );
}

export default Home;
