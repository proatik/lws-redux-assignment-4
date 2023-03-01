import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import createBook from "../../redux/books/thunk/createBook";
import updateBook from "../../redux/books/thunk/updateBook";
import { selectCandidate, changeMode } from "../../redux/books/actoins";

const formValues = {
  name: "",
  author: "",
  thumbnail: "",
  price: "",
  rating: "",
  featured: false,
};

const BookForm = () => {
  const dispatch = useDispatch();
  const { mode, candidate } = useSelector((state) => state.books);
  const [values, setValues] = useState(formValues);

  const changeHandler = (event) => {
    const { name, type, value, checked } = event.target;

    const updatedValues = {
      ...values,
      [name]: type === "checkbox" ? checked : value,
    };

    setValues(updatedValues);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (mode === "update") {
      dispatch(updateBook(values));
      dispatch(selectCandidate({}));
      dispatch(changeMode("create"));
    } else {
      dispatch(createBook(values));
    }

    setValues(formValues);
  };

  useEffect(() => {
    if (mode === "update") {
      setValues(candidate);
    }
  }, [mode, candidate]);

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">
          {mode === "update" ? "Update This Book" : " Add New Book"}
        </h4>
        <form className="book-form" onSubmit={formSubmitHandler}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={values.name}
              onChange={changeHandler}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={values.author}
              onChange={changeHandler}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={values.thumbnail}
              onChange={changeHandler}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={values.price}
                onChange={changeHandler}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={values.rating}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={values.featured}
              onChange={changeHandler}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {mode === "update" ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
