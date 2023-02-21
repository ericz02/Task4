const SearchBar = ({
    search,
    setSearch,
    maxLength,
    setMaxLength,
    sortMovies,
  }) => {
    const searchHandler = (e) => {
      setSearch(e.target.value);
    };
  
    const maxLengthHandler = (e) => {
      setMaxLength(e.target.value);
    };
    const sortMoviesHandler = (e) => {
      sortMovies(e.target.value);
    };
  
    return (
      <>
        <>
          <label htmlFor="search">Search Query</label>
          <input
            type="text"
            name="search"
            onChange={searchHandler}
            value={search}
          />
          <label htmlFor="max-length">Max Length</label>
          <input
            type="number"
            name="max-length"
            onChange={maxLengthHandler}
            value={maxLength}
          />
        </>
        <button onClick={sortMoviesHandler}>Sort Values</button>
      </>
    );
  };
  
  export default SearchBar;