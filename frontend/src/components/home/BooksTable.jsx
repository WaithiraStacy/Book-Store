 import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <>
      <style>{`
        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0.5rem;
        }

        th, td {
          border: 1px solid #334155; /* slate-700 */
          border-radius: 6px;
          padding: 8px;
          text-align: center;
        }

        th {
          background-color: #f1f5f9;
          font-weight: bold;
        }

        .icon-group {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .text-green {
          color: #166534;
          font-size: 1.5rem;
        }

        .text-yellow {
          color: #ca8a04;
          font-size: 1.5rem;
        }

        .text-red {
          color: #dc2626;
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none;
          }
        }
      `}</style>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th className="hide-on-mobile">Author</th>
            <th className="hide-on-mobile">Publish Year</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td className="hide-on-mobile">{book.author}</td>
              <td className="hide-on-mobile">{book.publishYear}</td>
              <td>
                <div className="icon-group">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-green" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-yellow" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-red" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksTable;