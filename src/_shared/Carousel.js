import React, { Component } from 'react';
import { src, trace } from './../images/gun.jpg';
import './Carousel.css';

export default class extends Component {
  render(){
    const style = { backgroundImage: `url(${src}` };

    return ( 
      <div id="carousel" className="carousel" >
        <div className="carousel__image" style={style} ref="image" />
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