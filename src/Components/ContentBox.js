import React, { useState } from 'react';
import Schedule from './Schedule.js';
import Faq from './Faq.js';
import Travel from './Travel.js';
import OurStory from './OurStory.js';
import Contact from './Contact.js';
import Home from './Home.js';
import Ceremony from './Ceremony.js';
import '../css/content-box.css';

function ContentBox(props) {

  const renderContent = () => {
    switch (props.page) {
      case 'Home':
        return <Home />;
      break;
      case 'Ceremony':
        return <Ceremony />;
      break;
      case 'Schedule':
        return <Schedule />;
      break;
      case 'Travel':
        return <Travel />;
      break;
      case 'FAQs':
        return <Faq size={props.size} />;
      break;
      case 'Our Story':
        return <OurStory />;
      break;
      case 'Contact':
        return <Contact />;
      break;
      default:
        return <Home />;
      break;
    };
  }

  return (
    <div className='content-box'>
      {renderContent()}
    </div>
  );
}

export default ContentBox;
