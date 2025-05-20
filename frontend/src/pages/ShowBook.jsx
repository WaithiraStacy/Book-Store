import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="show-book-container">
      <style>{`
        .show-book-container {
          padding: 16px;
          font-family: Arial, sans-serif;
        }

        .show-title {
          font-size: 28px;
          margin: 16px 0;
        }

        .book-details {
          display: flex;
          flex-direction: column;
          border: 2px solid #38bdf8;
          border-radius: 12px;
          width: fit-content;
          padding: 16px;
        }

        .book-item {
          margin: 16px 0;
        }

        .book-label {
          font-size: 18px;
          margin-right: 12px;
          color: #6b7280;
          font-weight: bold;
        }
      `}</style>

      <BackButton />
      <h1 className="show-title">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="book-details">
          <div className="book-item">
            <span className="book-label">Id:</span>
            <span>{book._id}</span>
          </div>
          <div className="book-item">
            <span className="book-label">Title:</span>
            <span>{book.title}</span>
          </div>
          <div className="book-item">
            <span className="book-label">Author:</span>
            <span>{book.author}</span>
          </div>
          <div className="book-item">
            <span className="book-label">Publish Year:</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="book-item">
            <span className="book-label">Create Time:</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="book-item">
            <span className="book-label">Last Update Time:</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;