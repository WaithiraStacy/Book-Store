import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card">
        <h2 className="publish-year-badge">{book.publishYear}</h2>
        <h4 className="book-id">{book._id}</h4>

        <div className="info-row">
          <PiBookOpenTextLight className="icon" />
          <h2 className="book-title">{book.title}</h2>
        </div>

        <div className="info-row">
          <BiUserCircle className="icon" />
          <h2 className="book-author">{book.author}</h2>
        </div>

        <div className="action-row">
          <BiShow
            className="action-icon show"
            onClick={() => setShowModal(true)}
          />
          <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle className="action-icon info" />
          </Link>
          <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className="action-icon edit" />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className="action-icon delete" />
          </Link>
        </div>
      </div>

      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}

      <style>
        {`
          .card {
            border: 2px solid #6b7280;
            border-radius: 10px;
            padding: 16px;
            margin: 16px;
            position: relative;
            transition: box-shadow 0.3s ease;
          }

          .card:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          .publish-year-badge {
            position: absolute;
            top: 4px;
            right: 8px;
            padding: 4px 12px;
            background-color: #fca5a5;
            border-radius: 8px;
          }

          .book-id {
            margin: 8px 0;
            color: #6b7280;
          }

          .info-row {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .icon {
            font-size: 24px;
            color: #fca5a5;
          }

          .book-title,
          .book-author {
            margin: 4px 0;
          }

          .action-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
            margin-top: 16px;
            padding: 8px;
          }

          .action-icon {
            font-size: 24px;
            cursor: pointer;
            transition: color 0.2s ease;
          }

          .action-icon.show {
            color: #1e40af;
          }

          .action-icon.info {
            color: #065f46;
          }

          .action-icon.edit {
            color: #ca8a04;
          }

          .action-icon.delete {
            color: #dc2626;
          }

          .action-icon:hover {
            color: #000;
          }
        `}
      </style>
    </>
  );
};

export default BookSingleCard;