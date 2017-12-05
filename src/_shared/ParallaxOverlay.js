import React, { Component } from 'react';

import './ParallaxOverlay.css';

export default class extends Component {
  static defaultProps = {
    id: 0,
    speed: 0.4,
    src: ''
  };

  state = { top: 0, loaded: false };

  render(){
    const { id, alt, src, trace } = this.props;
    const { top, loaded } = this.state;

    const traceClassName = `parallax__trace ${loaded ? 'parallax__trace--hidden' : '' }`;
    
    return ( 
      <div id={`p_${id}`} className="parallax">
        <div className="parallax__anchor">
          <img className="parallax__image"
            ref="image"
            style={{ top }}
            alt={alt}
            src={src}
            onLoad={this.loaded}
          />
          { trace &&
            <img className={traceClassName}
              ref="trace"
              style={{ top }}
              alt={alt}
              src={trace}
            />
          }
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
    const scrolltop = window.pageYOffset;
    const offset = -scrolltop * speed;
    const top = `${offset + 130}px`;
    this.setState({ top });
  };

  loaded = e => {
    this.setState({ loaded: true });
  }
}