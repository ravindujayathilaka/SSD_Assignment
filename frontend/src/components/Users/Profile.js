import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";

const Profile = () => {
  
  return (

    <div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-7">
            <div class="card p-3 py-4">
                <div class="text-center"> <img src="https://i.imgur.com/bDLhJiP.jpg" width="90" class="rounded-circle"/> </div>
                <div class="text-center mt-3"> <span class="bg-secondary p-1 px-4 rounded text-white">Text</span>
                    <h5 class="mt-2 mb-0">Name</h5> <span>Gender</span>
                    <div class="px-4 mt-1">
                        <p class="fonts">Address Address Address Address Address Address Address Address Address Address Address Address Address </p>
                    </div>
                
                    <div class="buttons"> <button class="btn btn-outline-primary px-4">Message</button> 
                    <button class="btn btn-primary px-4 ms-3">Contact</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
  );
};

export default Profile;
