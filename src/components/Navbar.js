import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/mobile-carwash-02.png';
import './Navbar.css';
import { animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

  const toggleHome = () => {
    scroll.scrollToTop();
    closeMobileMenu();
  };

  const toggleContact = () => {
    scroll.scrollToBottom()
    closeMobileMenu();
  }
  window.addEventListener('resize', showButton);
  window.addEventListener('scroll', toggleHome);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={toggleHome}>
            <img src={Logo} alt='' className='logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={toggleHome} >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              {/* <ScrollLink
                to='services'
                spy={true}
                smooth={true}
                duration={500}
                className='nav-links'
                activeClass='some-active-class'
              >
                Services
              </ScrollLink> */}

              <Link
                to='/'
                className='nav-links'
                onClick={toggleHome}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={toggleContact}
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
