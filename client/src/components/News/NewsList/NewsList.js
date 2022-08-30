import { useSelector, useDispatch } from "react-redux";
import { newsSelector } from "../../../redux/reducers/newsReducer";
import getNewsCollection from "../../../redux/actions/news-actions/getNewsAction";
import News from "../News/News";
import { NewsListStyled } from "./NewsListStyled";
import { useEffect } from "react";

const NewsList = () => {
  const dispatch = useDispatch();
  const getNewsFromServer = (url) => dispatch(getNewsCollection(url));

  useEffect(() => {
    getNewsFromServer("http://localhost:4004/news");
  });

  const newsList = useSelector(newsSelector);
  // console.log(users);

  return (
    <NewsListStyled>
      <div className="news-list-container">
        <h2>News</h2>
        <div className="news-list">
          {newsList.map((news, i) => {
            return <News key={i} data={news} />;
          })}
        </div>
      </div>
    </NewsListStyled>
  );
};

export default NewsList;
