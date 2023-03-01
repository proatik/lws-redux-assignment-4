import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import fetchBook from "../../redux/books/thunk/fetchBooks";

import Empty from "../../components/Empty";
import Book from "./Book";

const BookList = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const { status, search } = useSelector((state) => state.filters);

  const filterByStatus = (book) => {
    return status === "all" ? true : book.featured;
  };

  const filterBySearch = (book) => {
    return book.name.toLowerCase().includes(search.toLowerCase());
  };

  useEffect(() => {
    dispatch(fetchBook);
  }, []);

  const filteredBooks = books.filter(filterByStatus).filter(filterBySearch);

  if (!filteredBooks.length) return <Empty>No Book Found 👻</Empty>;

  return (
    <div className="lws-bookContainer">
      {books
        .filter(filterByStatus)
        .filter(filterBySearch)
        .map((book) => (
          <Book key={book.id} book={book} />
        ))}
    </div>
  );
};

export default BookList;
