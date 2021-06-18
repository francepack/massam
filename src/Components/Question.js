import React, { useState } from 'react';

function Question(props) {

  const [ isActive, setActive ] = useState(false);

  const toggleActive = () => {
    console.log('run')
    const toggle = !isActive;
    setActive(toggle);
  }

  return (
    <div className='quesiton'>
      <div className='q' onClick={() => toggleActive()}>
        {props.q}
      </div>
      <div className='answer'>
        {isActive &&
          <div className='a'>
            {props.a}
          </div>
        }
      </div>
    </div>
  );
}

export default Question;
