import React, { useState } from 'react';

function Travel(props) {

  return (
    <div className='travel'>
      <h1>Travel tips:</h1>
      <p>Use the <a href='https://www.rtd-denver.com/services/rail'>light rail</a> from the airport if possible.</p>
      <h4>Colorado is high altitude- Remember to hydrate</h4>
      <h1>Lodging</h1>
      <h4>We have a hotel block at <a href='https://www.sonesta.com/us/colorado/denver/sonesta-denver-downtown'>Sonesta Denver</a></h4>
      <h4>Please use <a href='https://book.passkey.com/e/50211663'>this link</a> to book a room for a discounted rate of $129.</h4>
      <p>This is a decent rate, and it is a popular travel weekend, so we encourage making plans for lodging soon.</p>
      <h4>The hotel block booking link will be active until August 2nd.</h4>
      <p>Please be in touch if with any lodging questions, or if help finding options is desired.</p>
      <p>CelebrateMasAndSam@gmail.com</p>
    </div>
  );
}

export default Travel;
