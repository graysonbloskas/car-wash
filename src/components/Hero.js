import React from 'react'
import Video from '../assets/videos/carwash-video.mov'
import './Hero.css';

function Hero() {
    return (
        <div className="container">
            <video src={Video} autoPlay loop muted />
            <h1>Mobile Carwash</h1>
            <p>Take the Pain out of the Detail</p>
        </div>
    )
}

export default Hero
