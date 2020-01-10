import React, { Component } from "react";
import './Skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Chip } from '@material-ui/core';

class Skills extends Component
{
    render(){
        AOS.init({
            offset : 400,
            duration : 1500
          });
        return(
            <div className="skillsSection" data-aos="fade-right">
                <h2>
                    Skills
                </h2>

                <div className="Chips">
                    <Chip label="Java" color='primary'/>
                    <Chip label="Python" style={{backgroundColor:'pink'}}/>
                    <Chip label="Javascript" />
                    <Chip label="HTML" />
                    <Chip label="CSS" />
                    <Chip label="React.js" />
                    <Chip label="MYSQL" />
                    <Chip label="GIT" />
                    <Chip label="C#" />
                    <Chip label="Spring" />
                </div>
            </div>
        );
    }
}

export default Skills;