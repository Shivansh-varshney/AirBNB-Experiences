import React from "react"
import star from "../assets/star.png"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card({img, price, rating, reviewCount, location, title, openSpots}) {
    return (
        <div className="card">
          <div className="card-badge">{openSpots ? openSpots + " Seats left": "SOLD OUT"}</div>
          <img className="card-photo" src={img} alt="Cover Image" />

          <div className="card-stats">
            <img src={star} alt="stars" /><span>{rating} </span><span className="gray"> ({reviewCount}) - {location}</span>
          </div>

          <p>{title}</p>
          <p><strong>From ${price}</strong> / person</p>
        </div>
    )
}