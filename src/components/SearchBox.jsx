const SearchBox = ({ city, setCity, onSearch }) => {
  return (
    <div className="search-box">
      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
