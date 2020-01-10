import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css'

class Education extends Component{
    render(){
        AOS.init({
            offset : 400,
            duration : 1500
          });
        return(
            <div className="educationClass" data-aos="fade-right">
                <h2>
                    Education
                </h2>
                <p>
                    Cape Peninsula University of Technology  &emsp; &emsp; &emsp;South Africa<br/>
                    National Diploma in Computer Engineering &emsp; &emsp; &emsp;2017 - 2019<br/><br/>

                    Main Subjects: <br/>
                    <ul>
                    <li>Programming</li>
                    <li>Network Systems</li>
                    <li>Database Principles</li>
                    <li>Digital Systems</li>
                    <li>Design </li>
                    <li>Mathematics</li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default Education;