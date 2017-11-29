import React, { Component } from 'react';
import VisorSVG from './svg/visor.js';

import './Visor.css';

export default class extends Component {
    state = { length: 0 }

    render() {
        const { length, offset } = this.state;
        
        // Set up the starting positions
        const strokeStyle = {
            strokeDasharray: length + ' ' + length,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 3s linear'
        };

      return (
        <div className="visor">
            <VisorSVG />
            <div className="logo">
                <h1>EVIL FX</h1>
                <h2>Props & Armor</h2>
          </div>
        </div>
      );
    }

    // componentDidMount(){
    //     const path = document.getElementById('visor__path');
    //     const length = path.getTotalLength();
    //     this.setState({ length, offset: length });
    //     setInterval(this.animate, 5000);
    // }

    // animate = () => {
    //     let { offset, length } = this.state;
    //     if (offset) offset = 0;
    //     else offset = length;

    //     this.setState({ offset })
    // }

}
  
  