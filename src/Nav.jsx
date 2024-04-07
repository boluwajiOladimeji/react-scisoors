import React, { useEffect } from 'react';
import { FaBars } from 'react-icons/fa6';
import { links } from './data';

const Nav = ({ scrollToView, nav, onSidebarOpen, sidebarOpen }) => {
  // sticky nav
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const navHeight = nav.current.getBoundingClientRect().height;

    const scrollTop = window.scrollY;
    scrollTop >= navHeight
      ? nav.current.classList.add('sticky')
      : nav.current.classList.remove('sticky');
  };
  return (
    <nav ref={nav} className='home' id='home'>
      <div className='nav-center'>
        <div className='logo'>
          <img className='logo-icon' src='./images/Logo.svg' alt='nav-logo' />
        </div>

        <ul className='nav-links'>
          {links.map((link, id) => (
            <li key={id} onClick={(e) => scrollToView(e, link.href)}>
              <a
                className={`nav-link ${id === 0 ? 'primary-blue-300' : ''} `}
                href={`#${link.href}`}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        <ul className='signin-links'>
          <li>
            <a className='signin-link primary-blue-300' href='#'>
              Log in
            </a>
          </li>
          <li>
            <a className='signin-link-bg btn-blue btn' href='#'>
              Try for free
            </a>
          </li>
        </ul>
        {!sidebarOpen && (
          <span className='logo-btn sidebar-open-btn' onClick={onSidebarOpen}>
            <FaBars fontSize={24} color='#095cec' />
          </span>
        )}
      </div>
    </nav>
  );
};

export default Nav;
