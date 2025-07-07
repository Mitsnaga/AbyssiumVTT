import React from 'react';
import '../css/landingpage.css'
const LandingPage: React.FC = () => {
  return (
    <div className='outer-box'>
        <h3> --- </h3>
        <h1 className='headline'>the potion is brewing.</h1>
        <div className="bottle-container">
        <img src="https://loremporium.com/assets/images/animations/Potion/bottle.png" className="bottle" alt="Magic Bottle" />
        <div className="bubbles-overlay">
        <div className="bubble small-bubble-1"></div>
        <div className="bubble small-bubble-2"></div>
        <div className="bubble small-bubble-10"></div>
        <div className="bubble small-bubble-11"></div>
        <div className="bubble tiny-bubble-1"></div>
        <div className="bubble tiny-bubble-2"></div>
        <div className="bubble tiny-bubble-3"></div>
        <div className="bubble tiny-bubble-4"></div>
        <div className="bubble tiny-bubble-5"></div>
        <div className="bubble medium-bubble-1"></div>
        <div className="bubble medium-bubble-2"></div>
        <div className="bubble medium-bubble-10"></div>
        <div className="bubble large-bubble-4"></div>
        <div className="bubble large-bubble-6"></div>
    </div>
  </div>
        <h3> --- </h3>
    </div>
  );
};

export default LandingPage;
