import React from 'react';
import { Link } from 'react-router-dom';

function oneCard(props) {
  return (
    <>
      <li className='cardsitem'>
        <Link className='cardsitemlink' to={props.path}>
          <figure className='cardsitempic-wrap' f={props.label}>
            <img
              className='cardsitemimg'
              alt='Blog Post'
              src={props.src}
            />
          </figure>
          <div className='cardsiteminfo'>
            <h5 className='cardsitemtext'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default oneCard;