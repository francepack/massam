import React, { useState } from 'react';
import Question from './Question.js';
import { obiPics, picSizes } from '../utils/picData.js';
import '../css/faq.css';

function Faq(props) {

const a1 = () => {
  return (
    <div className='answer'>
      <p>There will be plenty of vegetarian food options available. Food will be served buffet style, and there will also be a children's buffet for younger guests. If you are in need of vegan or gluten free meals, or if you have food allergies, our caterers can accommodate. Please inform us in advance by emailing:</p>
      <p><i>CelebrateMasAndSam@gmail.com</i></p>
    </div>
  );
}

const a2 = () => {
  return (
    <div className='answer'>
      <p>Really, you don't need to get us any gifts - we have everything we need. Having you present is gift enough for us.</p>
      <p>For those who are able and inclined to mark the occassion with a gift, we have a few things in mind:</p>
      <p>1. Consider a donation to <a href='https://www.youthonrecord.org' target='_blank'>Youth on Record</a> or <a href='https://artfromashes.org' target='_blank'>Art From Ashes</a>. We've been reflecting on arts as a way to empower youth, and both of these programs are funded in part by grants through Samantha's employer, so she has seen first hand the great work that is accomplished.</p>
      <p>2. If you really want to buy us something, we are registered at <a href='https://www.target.com/gift-registry/gift/celebratemasandsam' target='_blank'>Taget</a> and <a href='https://www.kangacare.com/apps/giftregistry/registry/147896' target='_blank'>KangaCare</a></p>
      <p>3. We are preparing to landscape and build a deck in the backyard. We could use help with lumber and other associated expenses. We want to buy from local companies for this project but many local places do not have gift cards. One place that does is <a href='https://www.otoolesgardencenters.com/' target='_blank'>O'Toole's Garden Center</a>. Other businesses we plan to use are <a href='https://www.ewinghardscape.com/locations/colorado-locations/littleton/' target='_blank'>Ewing</a>, <a href='https://gvt.net/' target='_blank'>Green Valley Turf</a>, <a href='https://www.frlco.com/' target='_blank'>Front Range Lumber Company</a>, and <a href='https://denvertoollibrary.org/' target='_blank'>Denver Tool Library</a>. To help us with this project, you can venmo Samantha, and we plan to update about our progress! <i>Venmo: @samanthapaigegarrett</i></p>
    </div>
  );
}

const a3 = () => {
  return (
    <div className='answer'>
      <p>Kids are welcome, and will be in attendance. There are many open spaces to play, as well as a kid's buffet.</p>
      <p>We are aware that most children still aren't vaccinated, so we are counting on guests with children to set and enforce the boundaries your family needs to feel safe. We know some family units will feel very comfortable interacting closely with one another, but this should not be assumed for anyone. Please be prepared to communicate your expectations with other parents when needed.</p>
    </div>
  );
}

const a4 = () => {
  return (
    <div className='answer'>
      <p>Yes, it's the worst. We are doing our best to provide as safe an environment as possible. Here is what we can tell you:</p>
      <p>The ceremnony is outdoors and the reception is under an open canopy.</p>
      <p>The venue and caterers have protocols in place for saftey.</p>
      <p>To our knowledge, all adult guests and vendors will be vaccinated*.</p>
      <p>There will be unvaccinated children at the wedding. If you are a parent, we trust you to make the decisions necessary to allow you and your family to feel safe. Ultimately, each parent will be responsible to enforce boundaries for their children.</p>
      <p>While we are making efforts to host a safe event, we currently live in a world where attending any event poses some level of risk. We hate that we have to say it, but should anyone get sick, we are not liable. All of that said, vaccines are rad! Go science!!</p>
      <p>We love all our guests, so please communicate with us about this important issue if you have any questions or concerns.</p>
      <p>*If you, or anyone in your party, are not vaccinated, please let us know so we can make plans for your safe participation.</p>
    </div>
  );
}

const a5 = () => {
  return (
    <div className='answer obi-pic-box'>
      <p>Yes! Of course you can see our sweet, adorable baby. He will be in attendance and is excited to meet you.</p>
      {obiPics.map(pic => {
        let picSize='small';
        if (props.size.width > 750) picSize = 'big';
        const dimentions = picSizes[picSize + pic.layout];
        const url = 'https://res.cloudinary.com/drerpvd8x/image/upload/' + dimentions + pic.name;
        return (
          <div className='obi-pic' key={pic.name}>
            <img src={url} />
          </div>
        );
      })}
    </div>
  );
}

  return (
    <div className='faq'>
      <Question
        q='Food?'
        a={a1()}
      />
      <Question
        q='Gifts?'
        a={a2()}
      />
      <Question
        q='Kids?'
        a={a3()}
      />
      <Question
        q='Covid?'
        a={a4()}
      />
      <Question
        q='Obi?'
        a={a5()}
      />
    </div>
  );
}

export default Faq;
