import { GET_EDITED_NEWS } from "../../types/types";

export default function passEditedNews(news) {
  return {
    type: GET_EDITED_NEWS,
    payload: news,
  };
}
