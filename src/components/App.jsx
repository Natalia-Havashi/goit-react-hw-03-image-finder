import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getImagesSerch } from 'api/images';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    modalVisible: false,
    loadMore: false,
    modal: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
  
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true });
  
      try {
        const { hits, totalHits } = await getImagesSerch(query, page);
        if (hits.length === 0) {
          alert('По вашому запиту нічого не знайдено =(');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          loadMore: page < Math.ceil(totalHits / 12),
          isLoading: false,
        }));
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false });
      }
    }
  }
  onSubmitForm = query => {
    this.setState(prevState => {
      if (prevState.query === query) {
        return null;
      } else {
        return { query, images: [], page: 1 };
      }
    });
  };
  modalOpen = (largeImageURL, tags) => {
    this.setState({ modal: { largeImageURL, tags }, modalVisible: true });
  };
  modalClose = () => {
    this.setState({ modalVisible: false, modal: null });
  };

  clickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />
        {this.state.images && (
          <ImageGallery
            images={this.state.images}
            onClickImages={this.modalOpen}
          />
        )}
        {this.state.isLoading && <Loader />}
        {this.state.loadMore && <Button loadMore={this.clickLoadMore} />}
        {this.state.modalVisible && (
          <Modal modal={this.state.modal} modalClose={this.modalClose} />
        )}
      </div>
    );
  }
}
