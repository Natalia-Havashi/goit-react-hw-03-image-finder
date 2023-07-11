import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getImagesSerch } from 'api/images';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

class App extends Component {
  state = {
    images: [],
    page: 1,
    per_page: 12,
    searchQuery: '',
    isLoading: false,
  };
  // handleSerch = async event => {
  //   event.preventDefault();
  //   const data = await getImagesSerch(event.target[0].value);
  //   this.setState({ images: [...data.hits] });
  // };
  handleSerch = event => {
    event.preventDefault();
    this.setState({ searchQuery: event.target[0].value });
  };

  componentDidUpdate(prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) this.apiImages();
  }

  apiImages = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getImagesSerch(this.state.searchQuery);
      this.setState({ images: [...data.images]});
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { isLoading, images } = this.state;
    return (
      <div>
        <Searchbar handleSerch={this.handleSerch} />
        {isLoading && <Loader />}
        <ImageGallery images={images} />
      </div>
    );
  }
}

export default App;
