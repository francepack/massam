import React, { useState } from 'react';
import '../css/ceremony.css';

function Ceremony(props) {

  return (
    <div className='ceremony'>
      <h2 className='bmarg'>Please arrive early and enjoy the gardens!</h2>
      <h3 className='bmarg'>Getting To and From Hudson Gardens</h3>
      <h4 className='bmarg'>Driving to Hudson Gardens</h4>
      <p>From Denver, head South on Santa Fe Drive (Hwy 85). Hang a right at the light on Vinewood St (the rightmost lane around here ends on that turn). Park in the lot to your right.</p>
      <h4 className='bmarg'>Light Rail to Hudson Gardens</h4>
      <p>The lightrail from downtown Denver will take you to downtown Littleton, about a mile walk to the venue. This could be a good option for those who can arrive early, don't mind a walk, and would like to avoid driving.</p>
      <p>We suggest catching the D-Line at <a href='https://www.rtd-denver.com/app/route/D/schedule?day=sunday&direction=southbound&version=upcoming'>16th and Stout</a> at 4:36p or before to be dropped off in Littleton with enough time to casually walk to the ceremony.</p>
      <p>To walk from the Littleton Station to Hudson Gardens, go South on Prince Street (just West of the Station), then turn right to go West on Church Street. Then turn left to go South on Sumner Street past Arapahoe Community College. This street will veer right and take you across Santa Fe Drive at a light to the Gardens. This walk is 0.9 miles, estimated to take 18 mins. If you are early, a small detour can take you through downtown Littleton, an area we enjoy!</p>
      <p>The last train in Littleton leaves at 10:44pm, so if you plan to return to Denver via light rail, give yourself plenty of time, and you'll need to leave before the party is over. As we encourage guests to attend the after-party (It's a pinball pub- sounds awesome, right!?), other rides will need to be arranged for later in the evening. Uber or Lyft are the main rideshares in Denver.</p>
      <h3 className='bmarg'>Ceremony site</h3>
      <h4 className='bmarg'>The site within Hudson Garden's is called Monet's Place</h4>
      <p>Head left in front of the Garden's Welcome Center, and you should see some signage.</p>
      <p>Monet's Place is a bit of a walk from the entrance to the gardens (about .2 miles), though a free pedicab is available for those interested. Again, leave pllenty of time for this if that is what you want to do.</p>
      <h4>Be sure to arrive plenty early to find the wedding site!</h4>
      <h4 className='bmarg'>Plus, there will be special music playing before the ceremony, by the <a href='https://www.youtube.com/watch?v=hUHgSQTDJy0&t=5s' target='_blank'>talented Collin Estes</a>.</h4>
      <p>Arriving plenty early is a great idea. This is a public Gardens, afterall- A beautiful place to walk around and mentally prepare for the party to ensue.</p>
      <h3 className='bmarg'>Wedding Program</h3>
      <h4>Special Music while guests are arriving</h4>
      <h4>Processional</h4>
      <h4>Greeting</h4>
      <h4>Centering Prayer</h4>
      <h4>Reading - Sonnet XVII by Pablo Neruda</h4>
      <h4>Song - Beloved One by Ben Harper</h4>
      <h4>Scripture - Ruth 1:16-17</h4>
      <h4>Vows</h4>
      <h4>Sharing of Rings</h4>
      <h4>Blessing of the Rings</h4>
      <h4>Sacrament of Communion</h4>
      <h4>Affirmation of the Covenant (Kiss)</h4>
      <h4>Benediction</h4>
      <h4>Introduction</h4>
      <div className='attendants bmarg topmarg'>
        <h3>Attendants</h3>
        <div>Rachel Garrett - Samantha's Sister</div>
        <div>Katelyn White - Samantha's Friend</div>
        <div>Tijuana Gray - Samantha's Friend</div>
        <div>Ryan France - Mason's Brother</div>
        <div>Jonathan Kidd - Mason's Friend</div>
        <div>Jordan Doig - Mason's Friend</div>
      </div>
      <div className='ceremony-participants bmarg'>
        <h3>Ceremony Participants</h3>
        <div>Chris Gilmore - Officiant</div>
        <div>Piano: Collin Estes, Mason's Friend</div>
        <div>Vocals: Megan Stacy, Mason's Sister</div>
        <div>Reading: Robin Harms, Mason's Sister</div>
      </div>
      <div className='family bmarg'>
        <h3>Family Processional</h3>
        <div>Mason's Parents: Roger & Mary Beth France</div>
        <div>Samantha's Parents: Marsha, Craig, & Cindy Garrett</div>
        <div>Mason's Siblings: Robin Harms, Ryan France, Megan Stacy</div>
        <div>Samantha's Siblings: Rachel Garrett, Melissa Gentner, Eric Anderson, Tom Davis</div>
        <div>Nieces: Riley Harms, Merra Stacy, Kyrah Gentner, Nyla DeWolf</div>
        <div>Nephews: Tyler Harms, Micah France, Adrian France, Myron Stacy, Cole Gentner, Asher DeWolf</div>
      </div>
    </div>
  );
}

export default Ceremony;
