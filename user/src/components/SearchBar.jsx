import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../redux/actions/cartActions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchProducts(query));
  };

  return (
    <div className="search-bar d-flex align-items-center">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary ms-2" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
