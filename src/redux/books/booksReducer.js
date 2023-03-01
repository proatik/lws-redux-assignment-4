import {
  BOOKS_LOADED,
  BOOK_CREATED,
  BOOK_UPDATED,
  BOOK_DELETED,
  CHANGE_MODE,
  SELECT_CANDIDATE,
} from "./actionsTypes";

import initialState from "./initialState";

const booksReducer = (state = initialState, action) => {
  // update the state after fetch operation.
  switch (action.type) {
    case BOOKS_LOADED: {
      const books = action.payload;
      const prevState = structuredClone(state);

      return { ...prevState, books };
    }

    // update the state after create operation.
    case BOOK_CREATED: {
      const newBook = action.payload;
      const prevState = structuredClone(state);

      const updatedBooks = [...prevState.books, newBook];

      return {
        ...prevState,
        books: updatedBooks,
      };
    }

    // update the state after update operation.
    case BOOK_UPDATED: {
      const updatedBook = action.payload;
      const prevState = structuredClone(state);

      const updatedBooks = prevState.books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      );

      return {
        ...prevState,
        books: updatedBooks,
      };
    }

    // update the state after delete operation.
    case BOOK_DELETED: {
      const bookId = action.payload;
      const prevState = structuredClone(state);

      const updatedBooks = prevState.books.filter((book) => book.id !== bookId);

      return {
        ...prevState,
        books: updatedBooks,
      };
    }

    // toggle between create and update mode.
    case CHANGE_MODE: {
      const mode = action.payload;
      const prevState = structuredClone(state);

      return {
        ...prevState,
        mode,
      };
    }

    // select the book to be updated.
    case SELECT_CANDIDATE: {
      const candidate = action.payload;
      const prevState = structuredClone(state);

      return {
        ...prevState,
        candidate,
      };
    }

    default:
      return state;
  }
};

export default booksReducer;
