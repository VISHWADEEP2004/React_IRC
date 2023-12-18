

import React from 'react';
import '../Assert/Css/Dogadap.css';

function Dogadap() {
  return (
    <>
    <div>
      <h1>AVAILABLE DOGS</h1>
    </div>
      <div className='flip-card-container'>
        <div class="flip-card1">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p class="title">FLIP CARD</p>
              <img className="dog-image" src="https://c4.wallpaperflare.com/wallpaper/917/691/823/dark-dog-animals-portrait-wallpaper-preview.jpg"></img>
            </div>
            <div class="flip-card-back">
              <p class="title">BACK</p>
              <p>Leave Me</p>
            </div>
          </div>
        </div>
        <div class="flip-card2">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p class="title">WILLY</p>
              <img className="dog-image" src="https://i.pinimg.com/736x/50/ee/86/50ee8616974883e4162bdf8fc6b8ceeb.jpg"></img>
            </div>
            <div class="flip-card-back">
              <p class="title">DETAILS</p>
              <div className="dog-details">
                <p>Name: Willy</p>
                <p>Breed: Labrador Retriever</p>
                <p>Age: 3 years</p>
              </div>

            </div>
          </div>
        </div>
        <div class="flip-card2">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p class="title">FLIP CARD</p>
              <img className="dog-image" src="https://w0.peakpx.com/wallpaper/967/321/HD-wallpaper-german-shepherd-dog-nice-dogs-beautiful-thumbnail.jpg"></img>
            </div>
            <div class="flip-card-back">
              <p class="title">BACK</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dogadap;
