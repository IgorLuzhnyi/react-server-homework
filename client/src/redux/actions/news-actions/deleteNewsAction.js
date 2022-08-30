import { DEL_NEWS } from "../../types/types";
import axios from "axios";

const delNews = (news) => {
  return {
    type: DEL_NEWS,
    payload: news,
  };
};

function deleteNews(url) {
  return (dispatch) => {
    axios.delete(url).then(({ data }) => dispatch(delNews(data)));
  };
}

export default deleteNews;
