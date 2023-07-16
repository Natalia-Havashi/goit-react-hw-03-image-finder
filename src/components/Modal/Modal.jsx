

export const Modal = ({modalClose,largeImageURL}) => {

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
     modalClose()
    }
  };

 const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
     modalClose()
    }
  };

  return (
    <div  onClick={handleOverlayClick}>
      <div onKeyDown={handleKeyDown}>
      <img src={largeImageURL} alt='' />
      </div>
    </div>
  );
}

