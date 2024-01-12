import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'; /* do not forget it */

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieCard key={movie.title} movie={movie} />
    ))}
  </div>
);

export default MovieList;