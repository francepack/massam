import React, { useState } from 'react';
import '../css/home.css';
import TwitterTimelineEmbed from 'react-tweet-embed'

function Home(props) {
  return (
    <div className='home'>
      <h2 className='bmarg'>Welcome!</h2>
      <h3 className='bmarg'>We are very excited to host you for our wedding!</h3>
      <h3 className='bmarg'>***Please check out the twitter feed below for live updates about our whereabouts.***</h3>
      <h3 className='bmarg'>***Also, check the Ceremony tab for important wedding day details.***</h3>
      <p className='bmarg'>Please look through this page using the navigation buttons above to find information about our wedding on September 5th at Hudson Gardens.</p>
      <h3 className='bmarg'>The FAQs page is worth checking out!</h3>
      <p className='bmarg'>Email us at CelebrateMasAndSam@gmail.com with any questions.</p>
      <h2 className='bmarg'>What are we up to?</h2>
      <h3 className='bmarg'>Live updates of Events - See Schedulle tab for general outline</h3>
      <a class="twitter-timeline" href="https://twitter.com/CelebrateMasSam?ref_src=twsrc%5Etfw">Tweets by CelebrateMasSam</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <section className="twitterContainer">
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="CelebrateMasSam"
          options={{
            tweetLimit: "10",
            width: "100%",
            height: "100%"
          }}
          theme="dark"
          noHeader="true"
          noBorders="true"
          noFooter="true"
        ></TwitterTimelineEmbed>
      </div>
    </section>
    </div>
  );
}

export default Home;
