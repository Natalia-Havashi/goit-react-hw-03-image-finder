import '../../styles.css'

export const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image)
  }
  return (
    <li className='ImageGalleryItem' onClick={handleClick}>
      <img className='ImageGalleryItem-image' src={image.webformatURL} alt={image.tags} />
    </li>
  )
};

