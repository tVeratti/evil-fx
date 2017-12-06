import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './Carousel.css';

export default class extends Component {
  render(){
    return ( 
      <Carousel autoPlay={true} 
        infiniteLoop={true}
        interval={8000}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src='http://via.placeholder.com/1900x500/333333' className='carousel__image' alt="a" />
        </div>
        <div>
          <img src='http://via.placeholder.com/1900x500/333333' className='carousel__image' alt="a" />
        </div>
        <div>
          <img src='http://via.placeholder.com/1900x500/333333' className='carousel__image' alt="a" />
        </div>
        <div>
          <img src='http://via.placeholder.com/1900x500/333333' className='carousel__image' alt="a" />
        </div>
      </Carousel>
    );
  };
}

function getStyle(src){
  return { backgroundImage: `url(${src})` }; 
}