import { booksLoaded } from "../actoins";

const fetchBooks = async (dispatch) => {
  const url = "http://localhost:9000/books";

  const response = await fetch(url);
  const books = await response.json();

  if (response.status === 200) {
    dispatch(booksLoaded(books));
  }
};

export default fetchBooks;
