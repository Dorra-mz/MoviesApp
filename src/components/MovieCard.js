import React from 'react';
import StarRating from 'react-rating-stars-component';
import './MovieCard.css'; 

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.posterURL} alt={movie.title} />
    <div className="movie-info">
      <h2>{movie.title}</h2>
      <StarRating
        count={5}
        value={movie.rating}
        size={20}
        edit={false}
        isHalf={true}
      />
      <p className="description">{movie.description}</p>
    </div>
  </div>
);

export default MovieCard;