import { Component } from "react";

export default class Searchbar extends Component  {
  state = {
    searchQuery: ''
  }

  handleChange = (event) => {
    this.setState({searchQuery: event.target.value})
  }

  handleSerch = (event) => {
    event.preventDefault()
    if(this.state.searchQuery.trim() === ''){
      alert('Поле пошуку порожнє! Введіть данні для пошуку! ');
      return;
    } else {
      this.props.onSubmit(this.state.searchQuery)
      this.setState({searchQuery: ''})
    }
  }
  render() {
    return (
    <header className="searchbar">
      <form onSubmit={this.handleSerch}>
        <input
        id='input'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChange}
          value={this.state.searchQuery}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
  );
  }
  
};


