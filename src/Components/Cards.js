import React from 'react';
import './Cards.css';
import CardItem from './oneCard';
import images from '../images/blog.jpg'
import images1 from '../images/blog1.jpg'
import images2 from '../images/blog2.png'
import images3 from '../images/blog3.png'
import images4 from '../images/blog4.jpg'
import images5 from '../images/forest.jfif'
import images6 from '../images/image2.jpg'
import images7 from '../images/img1.jpg'
function Cards() {
  return (
    <div className='cards'>
      <h1>Recent Blog Posts!</h1>
      <div className='cardscontainer'>
        <div className='cardswrapper'>
          <ul className='cardsitems'>
            <CardItem
              src={images}
              text='Have fun with whatever you got in your life'
              label='Fun'
              path='/About'
            />
            <CardItem
              src={images1} 
              text='Blogging is good for your career and for you life too'
              label='Bloging'
              path='/About'
            />
            <CardItem
            src={images2}
              text='Types of Blogging in our society and their aspects'
              label='Information'
              path='/About'
            />
          </ul>
          <ul className='cardsitems'>
            <CardItem
            src={images3}
            text='Blogging is good for your career and for you life too'
              label='Mystery'
              path='./'
            />
            <CardItem
            src={images4}
              text='Once upon a time in london streets'
              label='Time'
              path='/products'
            />
            <CardItem
            src={images5}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Rides'
              path='/sign-up'
            />
          </ul>

          <ul className='cardsitems'>
          <CardItem
          src={images6}
          text='Blogging is good for your career and for you life too'
            label='Mystery'
            path='/services'
          />
          <CardItem
          src={images7}
          text='Blogging is good for your career and for you life too'
            label='Adventure'
            path='images/blog.jpg'
          />
          
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;