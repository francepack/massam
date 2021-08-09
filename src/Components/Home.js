import React, { useState } from 'react';
import '../css/home.css';

function Home(props) {
  return (
    <div className='home'>
      <h2 className='bmarg'>Welcome!</h2>
      <h3 className='bmarg'>We are very excited to host you for our wedding!</h3>
      <p className='bmarg'>Please look through this page using the navigation buttons above to find information about our wedding on September 5th at Hudson Gardens.</p>
      <p>A few important things to note as you look at the website:</p>
      <h3>RSVPs are needed asap for Monday's brunch!</h3>
      <h3 className='bmarg'>The FAQs are worth checking out!</h3>
      <p className='bmarg'>Email us at CelebrateMasAndSam@gmail.com with any questions and to RSVP for brunch.</p>
    </div>
  );
}

export default Home;
