// import { getAllImages } from 'api/api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
const { Component } = require('react');


class ImageGallery extends Component {
  state = {
    images: [],
  };

// componentDidMount(){
// this.getImage()
//   }

//   getImage = async() => {
// const data = await getAllImages()
// this.setState({images: [...data]})
//   }
//   componentDidUpdate(prevProps, prevState){

//   }
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
