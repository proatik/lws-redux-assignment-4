import { bookDeleted } from "../actoins";

const deleteBook = (bookId) => async (dispatch) => {
  const url = `http://localhost:9000/books/${bookId}`;

  const response = await fetch(url, { method: "DELETE" });

  if (response.status === 200) {
    dispatch(bookDeleted(bookId));
  }
};

export default deleteBook;
