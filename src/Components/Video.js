import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Video.css'

class Video extends Component{
    render(){
        AOS.init({
            offset : 400,
            duration : 1500
          });
        return(
            <div className="videoclass" data-aos="fade-up">
                <ReactPlayer className="video" url='https://www.youtube.com/watch?v=NhYkoLnENwA&app=desktop' controls={true}/>            
            </div>
        );
    }
}

export default Video;