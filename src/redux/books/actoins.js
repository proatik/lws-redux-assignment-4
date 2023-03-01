import {
  BOOKS_LOADED,
  BOOK_CREATED,
  BOOK_UPDATED,
  BOOK_DELETED,
  CHANGE_MODE,
  SELECT_CANDIDATE,
} from "./actionsTypes";

export const booksLoaded = (books) => {
  return {
    type: BOOKS_LOADED,
    payload: books,
  };
};

export const bookCreated = (book) => {
  return {
    type: BOOK_CREATED,
    payload: book,
  };
};

export const bookUpdated = (book) => {
  return {
    type: BOOK_UPDATED,
    payload: book,
  };
};

export const bookDeleted = (bookId) => {
  return {
    type: BOOK_DELETED,
    payload: bookId,
  };
};

export const changeMode = (mode) => {
  return {
    type: CHANGE_MODE,
    payload: mode,
  };
};

export const selectCandidate = (book) => {
  return {
    type: SELECT_CANDIDATE,
    payload: book,
  };
};
