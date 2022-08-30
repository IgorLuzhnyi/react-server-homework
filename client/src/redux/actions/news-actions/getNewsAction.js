import { GET_NEWS } from "../../types/types";
import axios from "axios";

const getNews = (news) => {
  return {
    type: GET_NEWS,
    payload: news,
  };
};

const getNewsCollection = (url) => (dispatch) =>
  axios.get(url).then(({ data }) => dispatch(getNews(data)));

export default getNewsCollection;
