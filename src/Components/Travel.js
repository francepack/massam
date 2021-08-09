import React, { useState } from 'react';
import '../css/travel.css'

function Travel(props) {

  return (
    <div className='travel'>
      <h1 className='bmarg2'> -- Colorado is high altitude, so remember to hydrate! -- </h1>
      <h1 className='bmarg'>Traveling to Denver</h1>
      <p>We suggest using the <a href='https://www.rtd-denver.com/services/rail' target='_blank'>light rail</a> to/from <a href='https://www.flydenver.com/' target='_blank'>DIA</a> when possible. The airport is <a href='https://www.google.com/maps/dir/Union+Station,+1701+Wynkoop+St,+Denver,+CO+80202/DIA,+Concourse+B,+Pe%C3%B1a+Boulevard,+Denver,+CO/@39.7638652,-104.9294408,11.5z/data=!4m14!4m13!1m5!1m1!1s0x876c78c218bb53a7:0xa015769175cf507b!2m2!1d-105.0029714!2d39.7555307!1m5!1m1!1s0x876c67087a20ca75:0x27a3af5d5336b5b2!2m2!1d-104.6735406!2d39.8538071!3e0' target='_blank'>far enough</a> from downtown that shuttles, taxis, or ride services are expensive, if you are trying to avoid renting a vehicle.</p>
      <p className='bmarg'>From Union Station, you can take the <a href='https://www.rtd-denver.com/services/free-mallride' target='_blank'>Free Mall Ride</a> to convenient locations downtown.</p>
      <h1 className='bmarg'>Weather</h1>
      <p className='bmarg'>Colorado can experience a variety of weather in early September. Bring options for hot, cool, and rain. Rain is generally short-lived, but can be unexpected and sudden. The ceremony and reception will be open-air, so use your best judgement in planning what to wear. Usually, this time of year, we would expect hot afternoons and then a cooler evening.</p>
      <p className='bmarg'>We are currently getting a lot of smoke from wild fires, and this may not have changed by early September. Be prepared for poorer-than-usual air quality, particularly those with allergies or asthma.</p>
      <h1 className='bmarg'>Lodging</h1>
      <h4>The wedding party is staying at the <a href='https://www.sonesta.com/us/colorado/denver/sonesta-denver-downtown' target='_blank'>Sonesta Denver</a>, located downtown Denver.</h4>
      <h4 className='bmarg'>No need to stay at this hotel, but aside from the ceremony and after-party, the wedding party will be hanging out closer to central Denver.</h4>
      <p>This weekend is popular for travel, so make arrangements for lodging soon if you have not yet!</p>
      <p className='bmarg'>Please be in touch if with any lodging questions, or if help finding options is desired.</p>
      <p><i>Email us! CelebrateMasAndSam@gmail.com</i></p>
    </div>
  );
}

export default Travel;
