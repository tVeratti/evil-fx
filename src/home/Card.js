import React from 'react';

import './Card.css';

export default props => {
  const style = { backgroundImage: `url(http://via.placeholder.com/300x300/333333)` };
  return (
    <div className="card">
      <div className="card__image" style={style} />
      <h4 className="card__header">{props.header}</h4>
      <div className="card__body">{props.children}</div>
    </div>
  );
};