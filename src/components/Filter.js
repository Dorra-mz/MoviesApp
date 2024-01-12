import React from 'react';
import StarRating from 'react-rating-stars-component';
import './Filter.css';

const Filter = ({ titleFilter, rateFilter, onTitleChange, onRateChange }) => (
  <div className="filter">
    <label>Title:</label>
    <input type="text" value={titleFilter} onChange={onTitleChange} />

    <label>Rating:</label>
    <StarRating
      count={5}
      value={rateFilter}
      onChange={(newRating) => onRateChange(newRating.toString())}
      size={24}
      activeColor="#ffd700"
    />
  </div>
);

export default Filter;