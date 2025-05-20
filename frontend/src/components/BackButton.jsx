import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <>
      <style>{`
        .back-button-wrapper {
          display: flex;
        }

        .back-button {
          background-color: #075985; /* sky-800 */
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 0.5rem;
          width: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .back-icon {
          font-size: 1.5rem;
        }
      `}</style>

      <div className="back-button-wrapper">
        <Link to={destination} className="back-button">
          <BsArrowLeft className="back-icon" />
        </Link>
      </div>
    </>
  );
};

export default BackButton;