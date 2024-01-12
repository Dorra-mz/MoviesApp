import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import StarRating from 'react-rating-stars-component';
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The Beekeeper',
      description: 'A mind-bending heist movie.',
      posterURL: '',
      rating: 9.3,
    },
    {
      title: 'Oppenheiner',
      description: 'The story of J. Robert Oppenheimers role in the development of the atomic bomb during World War II.',
      posterURL: '',
      rating: 9.0,
    },
    {
      title: 'Wonka',
      description: 'Willy Wonka chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.',
      posterURL: '',
      rating: 8.6,
    },
    {
      title: 'Trolls Band Together',
      description: 'When Branchs brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.',
      posterURL: '',
      rating: 8.4,
    },
    {
      title: 'FOE',
      description: `Hen & Junior farm a secluded piece of land that has been in Junior's family for generations,but their quiet life is thrown into turmoil when an uninvited stranger shows up at their door with a startling proposal.`,
      posterURL: '',
      rating: 8.4,
    },
    {
      title: 'Barbie',
      description: 'A story about Barbie and her adventures in the magical world of imagination.',
      posterURL: '', 
      rating: 8.4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRateChange = (e) => {
    setRateFilter(e.target.value);
  };

  const handleAddMovie = () => {
   
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating.toString().includes(rateFilter)
  );

  return (
    <div>
      <h1>Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        rateFilter={rateFilter}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default App;