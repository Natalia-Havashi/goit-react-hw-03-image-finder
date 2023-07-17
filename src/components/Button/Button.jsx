import '../../styles.css';
export const Button = ({ onClick }) => {
  return (
    <div className='Container-button'>
      <button className="Button" onClick={onClick}>
        Load More
      </button>
    </div>
  );
};
