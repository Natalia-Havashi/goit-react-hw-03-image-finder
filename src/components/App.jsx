import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";

export const App = () => {
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
      <Searchbar onSubmit={<></>}/>
      <ImageGallery />
      <ImageGalleryItem />
      <Button />
      <Loader />
     <Modal />
    </div>
  );
};
