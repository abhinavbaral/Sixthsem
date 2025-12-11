import React, { useState } from 'react';
import styles from '../../styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(onSearch && query.trim()) {
            onSearch(query);
        }
    };
    return (
        <form onSubmit={handleSubmit} className={`${styles.searchBar} search-bar`}>
        <input 
          type="text"
          placeholder="Search for products,brands"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`${styles.input} search-input`}
          />
          <button type="submit" className={`${styles.button} search-btn`}>

             Search
        
        </button>
        </form>
    );

};
export default SearchBar;
