import React, { useState } from 'react';
import '../css/question.css';

function Question(props) {

  const [ isActive, setActive ] = useState(false);

  const toggleActive = () => {
    const toggle = !isActive;
    setActive(toggle);
  }

  const renderQuestion = () => {
    if (isActive) {
      return (
        <div className='question-box-active question-box'>
          <div className='question question-active'>
            <div className='plus-icon'><div className='circle circle-active'><div className='cross cross-active'></div></div></div>
            <p className='question-text'>{props.q}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className='question-box'>
          <div className='question'>
            <div className='plus-icon'><div className='circle'><div className='cross'></div></div></div>
            <p className='question-text'>{props.q}</p>
          </div>
        </div>
      );
    }
  }

  return (
    <div className='question-box-wrapper' onClick={() => toggleActive()}>
      {renderQuestion()}
      {isActive &&
        <div className='answer-box'>
          {props.a}
        </div>
      }
    </div>
  );
}

export default Question;
