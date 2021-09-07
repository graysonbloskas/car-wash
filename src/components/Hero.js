import React from 'react';
import Video from '../assets/videos/carwash-video.mov';
import { Element } from 'react-scroll';
import './Hero.css';

function Hero() {
  return (
    <Element to='hero'>
      <div className='container'>
        <video src={Video} autoPlay loop muted />
        <h1>Mobile Carwash</h1>
        <p>Take the Pain out of the Detail</p>
      </div>
    </Element>
  );
}

export default Hero;
// 