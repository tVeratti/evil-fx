import React, { Component } from 'react';

import './ParallaxOverlay.css';

export default class extends Component {
  defaultProps = {
    id: 0,
    speed: 0.05,
    src: ''
  };

  state = { top: 0 };

  render(){
    const { id, alt, src } = this.props;
    const { top } = this.state;
    
    return ( 
      <div id={`p_${id}`} className="parallax">
        <div className="parallax__anchor">
          <img className="parallax__image"
            ref="image"
            style={{ top }}
            alt={alt}
            src={src}
          />
        </div>
      </div>
    );
  };

  componentDidMount() {
    this.scroll();
    document.addEventListener('scroll', this.scroll);
  };

  scroll = e => {
    const { speed } = this.props;
    const { image } = this.refs;
    const height = image.offsetHeight;
    const bodyHeight = document.body.offsetHeight;
    const scrolltop = window.pageYOffset;
    const top = `${-scrolltop * speed}px`;
    this.setState({ top });
  };
}