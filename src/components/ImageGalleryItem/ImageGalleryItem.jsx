export const ImageGalleryItem = ({ images, onClickImages }) => {
  return images.map(({id,webformatURL,largeImageURL,tags}) => (
    <li
    key={id}
    onClick={() => {onClickImages(largeImageURL,tags)}}>
      <img src={webformatURL} alt={tags} />
    </li>
  )
    
  );
};