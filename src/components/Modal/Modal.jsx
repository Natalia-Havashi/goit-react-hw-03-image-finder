export const Modal = ({ onCloseModal, image }) => {
  const { largeImageURL, tags } = image;

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onCloseModal();
    }
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div onClick={handleOverlayClick}>
      <div onKeyDown={handleKeyDown}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};







