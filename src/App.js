import React, { useState } from 'react';
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
        return <Home />
      break;
      case 'schedule':
        return <Schedule />
      break;
      case 'denver':
        return <Denver />
      break;
      case 'travel':
        return <Travel />
      break;
      case 'food':
        return <Food />
      break;
      case 'gifts':
        return <Gifts />
      break;
      case 'covid':
        return <Covid />
      break;
      case 'contact':
        return <Contact />
      break;
      default:
        return <Home />
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
