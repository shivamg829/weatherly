import { FaSearch } from 'react-icons/fa'; 

const SearchBox = ({ city, setCity, onSearch }) => {
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
          placeholder="Search for a city..."
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