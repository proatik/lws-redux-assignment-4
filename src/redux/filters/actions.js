import { CHANGE_STATUS, CHANGE_SEARCH } from "./actionTypes";

export const changeStatus = (status) => {
  return {
    type: CHANGE_STATUS,
    payload: status,
  };
};

export const changeSearch = (text) => {
  return {
    type: CHANGE_SEARCH,
    payload: text,
  };
};
