import React, { useState } from 'react';
import '../css/schedule.css'

function Schedule(props) {

  return (
    <div className='schedule'>
      <header>
        <h1>Celebrate with us!</h1>
        <h1>Labor Day Weekend 2021</h1>
        <h3>Ceremony Sunday September 5th</h3>
        <h4><a href='https://www.hudsongardens.org/'>Hudson Gardens</a> - <a href='https://www.google.com/maps/place/The+Hudson+Gardens+%26+Event+Center/@39.6065212,-105.0219713,14.83z/data=!4m5!3m4!1s0x876c81d1cec00685:0x4bd927d7813c89de!8m2!3d39.6047036!4d-105.0220777'>Littleton, CO</a></h4>
        <h4>6pm - Reception to follow</h4>
      </header>
      <h3>Check back for schedule updates!</h3>
      <article className='days'>
        <div className='day'>
          <h3>Friday</h3>
          <p>Breweries downtown - TBD</p>
        </div>
        <div className='day'>
          <h3>Saturday</h3>
          <p>East Colfax Bars</p>
        </div>
        <div className='day'>
          <h3>Sunday</h3>
          <p>Wedding at Hudson Gardens at 6pm!</p>
        </div>
        <div className='day'>
          <h3>Monday</h3>
          <p>Brunch - Location TBD, probably Cap Hill or Baker</p>
        </div>
      </article>
      <article>
        <h3>Other Activities</h3>
        <h4>This will be a fun time to visit Denver!</h4>
        <p><a href='https://www.facebook.com/ATasteofColorado/'>Taste of Colorado</a></p>
        <p><a href='https://www.mlb.com/rockies/tickets/single-game-tickets?affiliateId=tdl-Colorado_Rockies-tickets-Colorado_Rockies%3A_Tickets%3A_Rockies_Tickets-na-x0-Phone-Portrait&fbclid=IwAR1vDQcV11G_p90RNbIk-IqPfPgiHprVhCzYh5qhtTlhcz8_AvyFMyDg2wk'>Catch a Rockies game</a></p>
        <p><a href='https://www.hudsongardens.org/enjoy/beer-festival/'>TBD beer fest at Hudson Gardens?</a> Will update</p>
        <p>There are any number of fun activities - get in touch for any reccomendations!</p>
        <p>CelebrateMasAndSam@gmail.com</p>
      </article>
    </div>
  );
}

export default Schedule;
