import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PersonalDetails.css';

class PDetails extends Component{
    render(){
        AOS.init({
            offset : 400,
            duration : 1500
          });
        return(
            <div className="pimg1">

                <div className="text" data-aos="fade-down">
                    <span className="border">
                        Personal Details
                    </span>
                    <div className="details">
                        <span>Name</span> <span>&emsp; Ricardo </span>
                        <span>Surname</span> <span>&emsp; Salambi </span>
                        <span>Age</span> <span>&emsp; 22 </span>
                        <span>Gender </span><span>&emsp; Male </span>
                        <span>Nationality</span> <span>&emsp; South African </span>
                        <span>Languages</span><span>&emsp;  English, Xhosa </span>
                        <span>Telephone</span><span>&emsp;  +27 76 680 5874,<br/>&emsp;&emsp;+27 72 439 6276 </span>
                        <span>Email</span> <span>&emsp; ricardox200@gmail.com<br/>ricardosalambi@gmail.com </span>
                    </div>
                    
                </div>

                <div className="Image">
                    <img src={require('../img/IMG_0343.JPG')} />
                </div>

            </div>
        );
    }
}

export default PDetails;