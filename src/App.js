import React, { Component } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './Components/Skills'
import Video from './Components/Video'
import Education from './Components/Education'
import WorkXP from './Components/WorkExperience'
import PDetails from './Components/PersonalDetails'
import Article from './Components/Article'

class App extends Component {
  render(){
    AOS.init({
      offset : 400,
      duration : 1500
    });
    return (      
      <div className="all">

        <PDetails/>
        <WorkXP/>
        <Skills/>
        <Education/>
        <Video/>
        <Article/>

      </div>
    );
  }
}

export default App;
