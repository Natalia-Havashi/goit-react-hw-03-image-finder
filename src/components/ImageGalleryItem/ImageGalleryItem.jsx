export const ImageGalleryItem = ({ image: { id, webformatURL } }) => {
  return (
    <li>
      <img src={webformatURL} alt="Pictur" />
    </li>
  );
};
