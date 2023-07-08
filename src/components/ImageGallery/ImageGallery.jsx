import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

const { Component } = require('react');

class ImageGallery extends Component {
  state = {
    // images: data,
  };

  render() {
    return (
      <ul>
        {this.state.images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
