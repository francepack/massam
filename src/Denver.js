import React, { useState } from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from '@cloudinary/base';

function Denver(props) {

  const myImage = props.cld.image('PXL_20210601_014528351_irkla2');

  return (
    <div className='denver'>
      <p>Denver will be fun this weekend</p>
      <AdvancedImage cldImg={myImage} />
      <div><a target='_blank' href='https://www.denver.org/event/a-taste-of-colorado/82619/'>Taste of Denver</a></div>
    </div>
  );
}

export default Denver;
