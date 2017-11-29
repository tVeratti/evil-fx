import React, { Component } from 'react';

import ParallaxOverlay from './_shared/ParallaxOverlay.js';
import ArmorImage from './images/evilfxarmor.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ParallaxOverlay id="armor" alt="Armor" src={ArmorImage} />

        <div className="main">
          <h3>Latest News</h3>
          <div className="panel">
          Be sure to follow me on Facebook and Twitch via the links on the bottom of the page to see the latest Updates and live cam feeds from the workshop.
      ​   <br /><br />
          I still have much to add to this site and not much free time to do it in so please be patient as I get things sorted.​
          <br /><br />
          CURRENT COMMISSIONS STATUS:
          <br /><br />
          Commissions are currently closed while I work on some personal costume/prop projects.  You may still submit requests for custom work, however unless it's something very cool or you want to pay me an insane amount of money, I may not reply untill commissions re-open in a few months.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
