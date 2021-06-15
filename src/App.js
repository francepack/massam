import React, { useState } from "react";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  const changePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <header className="App-header">
        Massam Wedding
      </header>
      <main>
        {currentPage === '' &&
          <p>We look forward to seeing you!</p>
        }
      </main>
    </div>
  );
}

export default App;
