// Header.js
import React, { useState } from 'react';

import './index.css'; // Import the CSS file for the Header component

const Header = ({ onSearch, onResetAll }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Event handler for clicking on a predefined term
  const handlePredefinedTermClick = term => {
    setSearchTerm(term);
    onSearch(term); // Trigger the search in the App component
  };

  // Event handler for submitting the search term
  const handleSearchSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm); // Trigger the search in the App component
  };

  // Event handler for clicking the "Clear" button
  const handleClearSearch = () => {
    setSearchTerm('');
    onSearch(''); // Trigger the search with an empty string in the App component
  };
  

  return (
    <header className="header-container">
      <h1>Star Wars Planets Info</h1>
      <p>You can search for a planet for a more clearer view and hit the clear button to go back to the list after looking. 
        You can click on a planet to get more details as well. You can also delete it or go back to the list with the 
        buttons. You can add a planet in the form below as well. After deleting something and/or adding something you can hit the reset all button 
        to get back to the original list.
      </p>
      <div className="button-container">
        {/* Example of predefined terms, you can customize this */}
        <button
          className="predefined-button"
          onClick={() => handlePredefinedTermClick('Tatooine')}
        >
          Tatooine
        </button>
        <button
          className="predefined-button"
          onClick={() => handlePredefinedTermClick('Alderaan')}
        >
          Alderaan
        </button>
        {/* Add more predefined terms here */}
      </div>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          placeholder="Enter a search term..."
        />
        <button type="submit" className="search-button">
          Search
        </button>
        <button type="button" onClick={handleClearSearch} className="clear-button">
          Clear
        </button>
        <button type="button" onClick={onResetAll} className="reset-button">
          Reset All
        </button>
      </form>
    </header>
  );
};


export default Header;
