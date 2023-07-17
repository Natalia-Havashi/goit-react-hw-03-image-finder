import '../../styles.css';
import { BiSolidDownload } from 'react-icons/bi';
export const Button = ({ onClick }) => {
  return (
    <div className='Container-button'>
      <button className="Button" onClick={onClick}>
      <BiSolidDownload size={30} color="white" />
      </button>
    </div>
  );
};
