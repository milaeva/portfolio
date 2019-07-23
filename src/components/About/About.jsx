import React from 'react';
import nav from './About.module.css';
import img from "../../img/bg_home.jpg";

const About = () =>{
  return(
    <div className="container">
      <div className={nav.home}>
          <img src={img} alt="photo" className={nav.bg} />
        </div>
        <div className={nav.block}>
          <h1 className={nav.title}>frontend developer</h1>
          <p className={nav.text}>I want to start a Frontend Developer career in a large international company and in five years to grow to the team leader!</p>
        </div> 
    </div>
  )
}

export default About;