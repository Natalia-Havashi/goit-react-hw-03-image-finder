
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClickImages }) => {
  return (
    <ul>
     
        <ImageGalleryItem images={images} onClick={onClickImages} />
      
    </ul>
  );
};
