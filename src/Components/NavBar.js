import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlog} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Button} from './Button';


function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const MobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-box'>
          <Link to='/' className='navbar-logo' onClick={MobileMenu}>
            Bloggie
           <FontAwesomeIcon icon={faBlog} className='blog-icon'></FontAwesomeIcon>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={MobileMenu}>
                HOME
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/About' className='nav-links' onClick={MobileMenu}>
                ABOUT
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/blog' className='nav-links' onClick={MobileMenu}>
                BLOG
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={MobileMenu} >
                PRODUCTS
              </Link>
            </li>

            <li>
              <Link
                to='/sign'
                className='nav-links-mobile'
                onClick={MobileMenu}
              >
                SIGN UP
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btnprimary'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
