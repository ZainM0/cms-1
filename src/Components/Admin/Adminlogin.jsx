import React from 'react'
import './Adminlogin.css';
import Navbar from "../Nav/Navbar";

const Adminlogin = () => {
  return (
    <div>
<div> <div className="navbar"> <Navbar /> </div>
      
      <div class="container">
    <div class="row justify-content-md-center" >
      <div class="col-md-auto offset-md-3">
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5">

            <div className="text-center">
              Admin Login
            </div>

            <div class="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name"/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password"/>
            </div>
            <div class="text-center"><a href="https://console.firebase.google.com/u/0/project/crime-management-system-8c803/authentication/users" class="btn btn-dark w-100">Login</a></div>
            
          </form>
        </div>

      </div>
    </div>
  </div></div>
  )
}

export default Adminlogin