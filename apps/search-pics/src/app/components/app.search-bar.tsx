const SearchBar = () => {
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <label htmlFor="search">Search images</label>
          <input id="search" type="text" />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
