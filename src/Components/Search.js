import React, { useContext } from 'react';
import './Search.css';
import DataContext from '../Context/DataContext';

const Search = () => { // Renamed to Start with an Uppercase Letter
    const { searchImage, setSearchImage, handleFormSubmit, username } = useContext(DataContext); // Fixed casing here
  
    return (

      <div className="search-container">
        
          <h1>Hello !! {username}</h1>
          
          
          <form onSubmit={handleFormSubmit} className="search-bar">
            
            <input
              type="text"
              placeholder="Search for images..."
              value={searchImage}
              onChange={(e) => setSearchImage(e.target.value)} // Fixed casing here
            />
            
            <button type="submit">
            🔍
            </button>
        
          </form>
      
      </div>
    );
};
  
export default Search; // Exporting the renamed component
