import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';
import styles from '../home/style.module.scss'

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`backdrop-blur-lg bg-[#075985]/10 shadow-lg rounded-lg p-6 m-4 hover:shadow-xl`}>
      
      <div className="px-6 py-4 relative z-10">
        <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {book.publishYear}
        </span>
        <h2 className="font-bold text-xl mb-2 text-gray-800">{book.title}</h2>
        <div className="flex items-center mb-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl mr-2" />
          <span className="text-gray-600">{book.author}</span>
        </div>
        <p className="text-gray-700 text-sm">{book._id}</p>
      </div>
      <div className="px-6 py-4 flex justify-end items-center relative z-10">
        <BiShow
          className="text-blue-800 hover:text-black text-3xl cursor-pointer mr-4"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-green-800 hover:text-black text-3xl mr-4" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-yellow-600 hover:text-black text-3xl mr-4" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-red-600 hover:text-black text-3xl" />
        </Link>
      </div>
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
