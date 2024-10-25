import React from "react";
import photo from "../assets/photo-grid.png"

export default function HeroSection(){
    return (
        <div id="hero-section">
            <img id="hero-photo" src={photo} alt="experiences-photo" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}