import React, { useState } from 'react';

const AddMoviesForm = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    trailerLink: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleAddMovie = () => {
   
    if (newMovie.title && newMovie.description && newMovie.rating) {
      onAddMovie(newMovie);
      // Reset 
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
        trailerLink: '',
      });
    } else {
      alert('Please fill in the required fields (Title, Description, and Rating).');
    }
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <label>Title:</label>
      <input type="text" name="title" value={newMovie.title} onChange={handleInputChange} />

      <label>Description:</label>
      <textarea name="description" value={newMovie.description} onChange={handleInputChange} />

      <label>Poster URL:</label>
      <input type="text" name="posterURL" value={newMovie.posterURL} onChange={handleInputChange} />

      <label>Rating:</label>
      <input type="text" name="rating" value={newMovie.rating} onChange={handleInputChange} />

      <label>Trailer Link:</label>
      <input type="text" name="trailerLink" value={newMovie.trailerLink} onChange={handleInputChange} />

      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMoviesForm;

