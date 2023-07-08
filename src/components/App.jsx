import { Component } from "react";
// import { Button } from "./Button/Button";
// // import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
// import { Loader } from "./Loader/Loader";
// import { Modal } from "./Modal/Modal";

import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";

class App extends Component {

  render () {
     return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar/>
      <ImageGallery />
      {/* <ImageGalleryItem /> */}
      {/* <Button />
      <Loader />
     <Modal /> */}
    </div>
  );
  }
 
};

export default App;