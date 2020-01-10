import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WorkExperience.css'

class WorkXP extends Component{
    render(){
        AOS.init({
            offset : 400,
            duration : 1500
          });
        return(
            <div className="workxpSection" data-aos="fade-right">
                <h2 className="workxpHeader">
                    Work Experience
                </h2>
                <p>
                    1. French South African Institute of Technology  (F’SATI)   &emsp; &emsp; &emsp;     21 January 2019 – 1 February 2019<br/><br/>
                    &emsp;Positioned as a Software Engineering intern at F’SATI, A member of F’SATI data analytics team, Obtained <br/>&emsp;responsibility of automating the process of decoding the data and inserting that data into a MYSQL database <br/>&emsp;
                    for easy retrieval, as well as providing statistics of the satellite data collected so far.  The language used <br/>&emsp;for these procedures is the mainly the python programming language for decoding the data and <br/>&emsp;
                    automating the process for further use in the future, and the C# programming language for validation of <br/>&emsp;data sent through the ground stations MQTT connection.<br/>
                    <br/>
                    &emsp;Major Responsibilities in the role :<br/>
                    <ul>
                    <li>Satellite Data Validation for AIS messages received</li>
                    <li>Satellite Data Decoding for AIS messages received</li>
                    <li>Satellite Data statistics which include providing information <br/>on all the data collected so far and producing charts using the data collected so far.</li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default WorkXP;