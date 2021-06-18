import React, { useState } from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from '@cloudinary/base';
import ContentBox from './Components/ContentBox.js';
import './css/app.css';

function App() {
  const [ currentPage, setCurrentPage ] = useState('Home');
  const [ isNavActive, setNav ] = useState(false);
  const pages = [ 'Home', 'Our Story', 'Schedule', 'Travel', 'FAQs', 'Contact' ];

  const changePage = (page) => {
    setCurrentPage(page);
  }

  const toggleNav = () => {
    const newNav = !isNavActive;
    setNav(newNav);
  }

  const renderNavItems = () => {
    return pages.map(page => {
      if (page !== 'Home') {
        if (page === currentPage) {
          return(
            <li key={page} className='nav-item selected' onClick={() => changePage(page)}><p>{page}</p></li>
          );
        } else {
          return (
            <li key={page} className='nav-item' onClick={() => changePage(page)}><p>{page}</p></li>
          );
        }
      }
    });
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
        <ContentBox
          page={currentPage}
        />
      </main>
    </div>
  );
}

export default App;
