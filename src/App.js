import React, { useState } from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from '@cloudinary/base';
import Schedule from './Schedule.js';
import Gifts from './Gifts.js';
import Food from './Food.js';
import Denver from './Denver.js';
import Travel from './Travel.js';
import Contact from './Contact.js';
import Covid from './Covid.js';
import Home from './Home.js';
import './css/app.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNavActive, setNav] = useState(false);
  const pages = ['home', 'schedule', 'denver', 'travel', 'food', 'gifts', 'covid', 'contact' ];

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'drerpvd8x'
    }
  });

  const changePage = (page) => {
    setCurrentPage(page);
  }

  const toggleNav = () => {
    const newNav = !isNavActive;
    setNav(newNav);
  }

  const renderNavItems = () => {
    return pages.map(page => {
      if (page !== 'home') {
        if (page === currentPage) {
          return(
            <li key={page} className='nav-item selected' onClick={() => changePage(page)}><p>{page.charAt(0).toUpperCase() + page.slice(1)}</p></li>
          )
        } else {
          return(
            <li key={page} className='nav-item' onClick={() => changePage(page)}><p>{page.charAt(0).toUpperCase() + page.slice(1)}</p></li>
          )
        }
      }
    })
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home cld={cld} />
      break;
      case 'schedule':
        return <Schedule cld={cld} />
      break;
      case 'denver':
        return <Denver cld={cld} />
      break;
      case 'travel':
        return <Travel cld={cld} />
      break;
      case 'food':
        return <Food cld={cld} />
      break;
      case 'gifts':
        return <Gifts cld={cld} />
      break;
      case 'covid':
        return <Covid cld={cld} />
      break;
      case 'contact':
        return <Contact cld={cld} />
      break;
      default:
        return <Home cld={cld} />
      break;
    }
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <h2 className='title' onClick={() => changePage('home')}>Samantha + Mason</h2>
        <div className='nav-bar-area'>
            <ul className='list'>
              {renderNavItems()}
            </ul>
            <div className='drop-down-nav'>
              <div className='icon' onClick={() => toggleNav()}>
                <div className='menu-bar'></div>
                <div className='menu-bar'></div>
                <div className='menu-bar'></div>
              </div>
            </div>
        </div>
        {isNavActive &&
          <ul className='expanded-menu'>
            {renderNavItems()}
          </ul>
        }
      </header>
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
