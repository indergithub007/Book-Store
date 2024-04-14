import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">No</th>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 hidden md:table-cell">Author</th>
            <th className="px-4 py-2 hidden md:table-cell">Publish Year</th>
            <th className="px-4 py-2 text-center">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2 hidden md:table-cell">{book.author}</td>
              <td className="border px-4 py-2 hidden md:table-cell">{book.publishYear}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-center items-center space-x-2">
                  <Link to={`/books/details/${book._id}`} className="text-green-600 hover:text-green-700">
                    <BsInfoCircle className="text-xl" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`} className="text-yellow-600 hover:text-yellow-700">
                    <AiOutlineEdit className="text-xl" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`} className="text-red-600 hover:text-red-700">
                    <MdOutlineDelete className="text-xl" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
