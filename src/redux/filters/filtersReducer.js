import { CHANGE_SEARCH, CHANGE_STATUS } from "./actionTypes";

import initialState from "./initialState";

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    // toggle between filter statuses all and featured.
    case CHANGE_STATUS: {
      const status = action.payload;
      return { ...state, status };
    }

    // change the text to be serched.
    case CHANGE_SEARCH: {
      const search = action.payload;
      return { ...state, search };
    }

    default:
      return state;
  }
};

export default filtersReducer;
