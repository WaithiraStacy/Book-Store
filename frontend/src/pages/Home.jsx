import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <style>{`
        .home-container {
          padding: 16px;
          font-family: Arial, sans-serif;
        }

        .button-group {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .button-style {
          background-color: #7dd3fc;
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        }

        .button-style:hover {
          background-color: #0284c7;
          color: white;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .title {
          font-size: 28px;
          margin: 32px 0 16px 0;
        }

        .add-icon {
          font-size: 32px;
          color: #075985;
          cursor: pointer;
        }

        .add-icon:hover {
          color: #0ea5e9;
        }
      `}</style>

      <div className="button-group">
        <button className="button-style" onClick={() => setShowType('table')}>
          Table
        </button>
        <button className="button-style" onClick={() => setShowType('card')}>
          Card
        </button>
      </div>

      <div className="top-bar">
        <h1 className="title">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="add-icon" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;