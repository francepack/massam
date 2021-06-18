import React, { useState } from 'react';
import Question from './Question.js';
import { obiPics, picSizes } from '../utils/picData.js';

function Faq(props) {

const a1 = () => {
  return (
    <p>'There will be plenty of vegetarian food options. If you need a vegan or gluten free meal or if you have food allergies, our caterers will accommodate. Please let us know ahead of time by emailing CelebrateMasAndSam@gmail.com.'</p>
  );
}

const a2 = () => {
  return (
    <div>
      <p>Yes, it's the worst. We are doing our best to provide as safe an environment as possible to party. Here is what we can tell you:</p>
      <p>The ceremnony will be outdoors and the reception will be under an open canopy.</p>
      <p>The venue and caterers have protocols in place for saftey.</p>
      <p>To our knowledge, all guests over 12 will be fully vaccinated.* We will update here if this information changes.</p>
      <p>There will be unvaccinated children at the wedding. If you are a parent, we trust you to make the decisions necessary to allow you and your family to feel safe. Ultimately, each parent will be responsible to enforce the boundaries they are comfortable with for their children.</p>
      <p>While we are making efforts to host a safe event, we currently live in a world where attending any event poses some level of risk. We hate that we have to say it, but should anyone get sick, we are not liable. All of that said, vaccines are rad! Go science!!</p>
      <p>We love all our guests, so please communicate with us about this important issue.</p>
      <p>*If you, or anyone in your party, are not vaccinated, please let us know so we can make plans for your safe participation.</p>
    </div>
  );
}

const a3 = () => {
  return (
    <div>
      <p>Ultimately, we have everything we need, and we do not need gifts.</p>
      <p>However, a wedding is a celebration worth giving towards. We would love if you considered donating to the following organizations that are important to us:</p>
      <p>We are registered here:</p>
    </div>
  );
}

const a4 = () => {
  return (
    <div>
      <p>Yes! Of course you can see our sweet, adorable baby.</p>
      {obiPics.map(pic => {
        let picSize='small';
        if (props.size.width > 750) picSize = 'big';
        const dimentions = picSizes[picSize + pic.layout];
        const url = 'https://res.cloudinary.com/drerpvd8x/image/upload/' + dimentions + pic.name;
        return (
          <div key={pic.name}>
            <img src={url} />
          </div>
        );
      })}
    </div>
  );
}

  return (
    <div className='faq'>
      <div className='questions'>
        <div className='questions'>
          <Question
            q='What if I have food allergies or dietary restrictions?'
            a={a1()}
          />
          <Question
            q='Covid???'
            a={a2()}
          />
          <Question
            q='Is there a gift registry?'
            a={a3()}
          />
          <Question
            q='Can I see some picture of Obi?'
            a={a4()}
          />
        </div>
      </div>
    </div>
  );
}

export default Faq;
