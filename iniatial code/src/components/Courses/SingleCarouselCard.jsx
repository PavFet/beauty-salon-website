import React from 'react';
import './single-carousel-card.scss';

function SingleCarouselCard({ data }) {
  return (
    <div className="card">
      <img alt={data.text} src={data.image} className="card-image" />
      <div className="card-footer">
        <h6>{data.text}</h6>
      </div>
    </div>
  );
}

export default SingleCarouselCard;
