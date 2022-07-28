import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainContent.css';
import images from '../images/space.mp4'
function MainContent() {
  return (
    <div className='main-container'>
    <video src={images} autoPlay loop muted />
      <h1>Create And Share</h1>
      <p>Writing A Blog Saves<span className='span'> From Therapy</span></p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btnoutline'
          buttonSize='btnlarge'
        >
          GET STARTED
        </Button>
        
      </div>
    </div>
  );
}

export default MainContent;