import { bookCreated } from "../actoins";

const createBook = (book) => async (dispatch) => {
  const url = "http://localhost:9000/books";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      ...book,
      price: Number(book.price),
      rating: Number(book.rating),
    }),
  });

  const createdBook = await response.json();

  if (response.status === 201) {
    dispatch(bookCreated(createdBook));
  }
};

export default createBook;
