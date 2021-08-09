import React, { useState } from 'react';
import '../css/schedule.css'

function Schedule(props) {

  return (
    <div className='schedule'>
      <header>
        <h2>Celebrate with us!</h2>
        <h1>Labor Day Weekend 2021</h1>
        <h3>Ceremony Sunday, September 5th</h3>
        <h4><a href='https://www.hudsongardens.org/' target='_blank'>Hudson Gardens</a> - <a href='https://www.google.com/maps/place/The+Hudson+Gardens+%26+Event+Center/@39.6065212,-105.0219713,14.83z/data=!4m5!3m4!1s0x876c81d1cec00685:0x4bd927d7813c89de!8m2!3d39.6047036!4d-105.0220777'>Littleton, CO</a></h4>
        <h4>6pm - Reception to follow</h4>
      </header>
      <h3><i>Check back for updates!</i></h3>
      <article className='days'>
        <div className='day'>
          <h3>Friday</h3>
          <p>Breweries and Downtown</p>
          <p>Great Divide, Woods Boss, 5 Points neighborhood are possibilities</p>
        </div>
        <div className='day'>
          <h3>Saturday</h3>
          <p>Colfax Bars</p>
          <p>East-Central</p>
          <p>Likely around Mezcal, Atomic Cowboy, and Goosetown</p>
        </div>
        <div className='day'>
          <h3>Sunday</h3>
          <p>6pm Wedding at Hudson Gardens</p>
          <p>Dinner and dancing to follow</p>
          <p>11pm to 2am after party at <a href='https://coloradopinballpub.com/' target='_blank'>Colorado Pinball Pub</a></p>
        </div>
        <div className='day'>
          <h3>Monday</h3>
          <p>10am Brunch</p>
          <p><a href='https://historiansalehouse.com/' target='_blank'>Historian's Ale House</a> - rooftop</p>
        </div>
      </article>
      <article className='activities'>
        <h3>Other Activities</h3>
        <h4>This will be a fun time to visit Denver!</h4>
        <p>Spend time downtown for <a href='https://www.facebook.com/ATasteofColorado/' target='_blank'>Taste of Colorado</a>.</p>
        <p>Catch a <a href='https://www.mlb.com/rockies/tickets/single-game-tickets?affiliateId=tdl-Colorado_Rockies-tickets-Colorado_Rockies%3A_Tickets%3A_Rockies_Tickets-na-x0-Phone-Portrait&fbclid=IwAR1vDQcV11G_p90RNbIk-IqPfPgiHprVhCzYh5qhtTlhcz8_AvyFMyDg2wk' target='_blank'>Rockies game</a>.</p>
        <p><a href='https://www.hudsongardens.org/enjoy/beer-festival/' target='_blank'>TBD beer fest at Hudson Gardens</a>? Check back here for updates.</p>
        <p>Denver has any number of fun activities - Get in touch for any reccomendations!</p>
        <p><i>Email us! CelebrateMasAndSam@gmail.com</i></p>
      </article>
    </div>
  );
}

export default Schedule;
