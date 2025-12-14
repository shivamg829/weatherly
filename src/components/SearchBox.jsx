import { FaSearch } from 'react-icons/fa'; // Assuming you install react-icons

const SearchBox = ({ city, setCity, onSearch }) => {
  // Function to handle the 'Enter' key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="search-box">
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter city name (e.g., London, Tokyo)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
        <button className="search-button" onClick={onSearch} aria-label="Search">
          <FaSearch className="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;