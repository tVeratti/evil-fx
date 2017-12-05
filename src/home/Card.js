import React, { Component } from 'react';

import { src } from './../images/gun.jpg';

import './Card.css';

export default props => {
  const style = { backgroundImage: `url(${src})` };
  return (
    <div className="card">
      <div className="card__image" style={style} />
      <h4 className="card__header">{props.header}</h4>
      <div className="card__body">{props.children}</div>
    </div>
  );
};