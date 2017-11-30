import React, { Component } from 'react';

import './Carousel.css';

export default class extends Component {
  render(){
    
    return ( 
      <div className="carousel" ref="image">
        
        <div className="carousel__dots">
            <button className="carousel__dot carousel__dot--active" />
            <button className="carousel__dot" />
            <button className="carousel__dot" />
            <button className="carousel__dot" />
        </div>
      </div>
    );
  };
}