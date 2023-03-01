import BookListHeader from "./BookListHeader";
import BookList from "./BookList";

const BookCollections = () => {
  return (
    <div className="order-2 xl:-order-1">
      <BookListHeader />
      <BookList />
    </div>
  );
};

export default BookCollections;
