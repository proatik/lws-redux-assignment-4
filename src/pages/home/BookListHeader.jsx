import { useDispatch, useSelector } from "react-redux";

import { changeStatus } from "../../redux/filters/actions";

const BookListHeader = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.filters.status);
  const mode = useSelector((state) => state.books.mode);

  const changeStatusHandler = (status) => {
    dispatch(changeStatus(status));
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>
      <div className="flex items-center space-x-4">
        <button
          id="lws-filterAll"
          disabled={mode === "update" && active !== "all"}
          className={`filter-btn ${active === "all" && "active-filter"}`}
          onClick={() => changeStatusHandler("all")}
        >
          All
        </button>
        <button
          id="lws-filterFeatured"
          disabled={mode === "update" && active !== "featured"}
          className={`filter-btn ${active === "featured" && "active-filter"}`}
          onClick={() => changeStatusHandler("featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default BookListHeader;
