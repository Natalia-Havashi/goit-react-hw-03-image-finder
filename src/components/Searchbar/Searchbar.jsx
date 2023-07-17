import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles.css'

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSerch = event => {
    event.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() !== '') {
      onSubmit(query.trim());
    } else {
      toast.error('Поле пошуку порожнє, введіть значення пошуку! ');
    }
  };
  render() {
    const { query } = this.state;
    return (
      <header className="Searchbar">
        <ToastContainer />
        <form className='SearchForm' onSubmit={this.handleSerch}>
          <input
          className='SearchForm-input'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={query}
          />
          <button className='SearchForm-button' type="submit">
            <span className='SearchForm-button-label'>Search</span>
          </button>
        </form>
      </header>
    );
  }
}



