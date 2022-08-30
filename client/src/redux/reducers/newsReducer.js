import { ADD_NEWS, GET_NEWS, GET_EDITED_NEWS } from "../types/types";

const initState = {
  news: [],
  editedNews: null,
};

const newsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEWS:
      return { ...state, news: [...state.news, payload] };
    case GET_NEWS:
      return { ...state, news: payload };
    case GET_EDITED_NEWS:
      return { ...state, editedNews: payload };
    default:
      return state;
  }
};

export const newsSelector = (state) => state.newsReducer.news;
export const editedNewsSelector = (state) => state.newsReducer.editedNews;

export default newsReducer;
