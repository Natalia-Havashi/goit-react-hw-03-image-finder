export const Searchbar = ({ handleChange, handleSerch }) => {
  return (
    <header class="searchbar">
      <form onSubmit={handleSerch}>
        <input
          name="search"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
