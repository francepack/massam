import React, { useState } from 'react';
import Schedule from './Schedule.js';
import Gifts from './Gifts.js';
import Food from './Food.js';
import Denver from './Denver.js';
import General from './General.js';
import Contact from './Contact.js';
import Covid from './Covid.js';




import './css/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  const changePage = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Massam Wedding</h2>
        <div className='nav-bar-area'>
          <ul>
            <li onClick={() => changePage('schedule')}>Schedule</li>
            <li onClick={() => changePage('denver')}>Denver</li>
            <li onClick={() => changePage('general')}>Tavel Info</li>
            <li onClick={() => changePage('food')}>Food</li>
            <li onClick={() => changePage('gifts')}>Gifts</li>
            <li onClick={() => changePage('covid')}>Covid info</li>
            <li onClick={() => changePage('contact')}>Contact us</li>
          </ul>
        </div>
      </header>
      <main>
        {currentPage === '' &&
          <p>We look forward to seeing you!</p>
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
        {currentPage === 'general' &&
          <General />
        }
      </main>
    </div>
  );
}

export default App;
