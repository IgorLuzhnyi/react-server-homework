import { ADD_NEWS } from "../../types/types";
import axios from "axios";

const newNews = (news) => {
  return {
    type: ADD_NEWS,
    payload: news,
  };
};

export const addNews = (url, news) => {
  return (dispatch) => {
    axios.post(url, news).then(({ data }) => dispatch(newNews(data)));
  };
};
