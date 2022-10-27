import React from 'react';

export default function Card(props) {
  let cardBadge;
  if (props.openSpots === 0) {
    cardBadge = 'SOLD OUT';
  } else if (props.location === 'Online') {
    cardBadge = 'ONLINE';
  }
  return (
    <div className="card">
      {cardBadge && <span className="card__badge">{cardBadge}</span>}
      <img
        src={`../../assets/${props.coverImg}`}
        alt=""
        className="card__media"
      />
      <div className="card__stats">
        <img
          src="../../assets/Star 1.png"
          alt=""
          className="card__stats-star"
        />
        <span className="card__stats-rating">{props.stats.rating}</span>
        <span className="card__stats-review">
          ({props.stats.reviewCount}) •
        </span>
        <span className="card__stats-location"> {props.location}</span>
      </div>
      <div className="card__info">
        <h4 className="card__info-title">{props.title}</h4>
        <p className="card__info-price">
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
