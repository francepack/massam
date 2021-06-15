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
  const pages = ['home', 'schedule', 'denver', 'travel', 'food', 'gifts', 'covid', 'contact' ]

  const changePage = (page) => {
    setCurrentPage(page);
  }

  const renderNavItems = () => {
    return pages.map(page => (<li key={page} onClick={() => changePage(page)}>{page.charAt(0).toUpperCase() + page.slice(1)}</li>))
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <h2>Massam Wedding</h2>
        <div className='nav-bar-area'>
          <ul>
            {renderNavItems()}
          </ul>
        </div>
      </header>
      <main>
      {currentPage === 'home' &&
        <Home />
        }
      {currentPage === 'schedule' &&
        <Schedule />
        }
      {currentPage === 'denver' &&
        <Denver />
        }
      {currentPage === 'food' &&
        <Food />
        }
      {currentPage === 'gifts' &&
        <Gifts />
        }
      {currentPage === 'covid' &&
        <Covid />
        }
      {currentPage === 'contact' &&
        <Contact />
        }
      {currentPage === 'travel' &&
        <Travel />
        }
      </main>
    </div>
  );
}

export default App;
