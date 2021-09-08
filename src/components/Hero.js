import React from 'react';
import Video from '../assets/videos/carwash-video.mov';
import { Element } from 'react-scroll';
import './Hero.css';

function Hero() {
  return (
    <Element to='hero'>
      <div className='h-screen bg-opacity-50 bg-black flex items-center justify-center contain'>
        <video src={Video} autoPlay loop muted />
        <h1 className="hero-title">Mobile Carwash</h1>
        <p className="hero-text">Tell Us Where You Are & We'll Handle The Detail</p>
      </div>
    </Element>
  );
}

export default Hero;
