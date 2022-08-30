import { UPD_NEWS } from "../../types/types";
import axios from "axios";

const update = (news) => {
  return {
    type: UPD_NEWS,
    payload: news,
  };
};

function updateNews(url, data) {
  return (dispatch) => {
    axios.put(url, data).then(({ data }) => dispatch(update(data)));
  };
}

export default updateNews;
