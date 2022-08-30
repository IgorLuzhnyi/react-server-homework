import { NewsStyled } from "./NewsStyled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import deleteNews from "../../../redux/actions/news-actions/deleteNewsAction";
import getNewsCollection from "../../../redux/actions/news-actions/getNewsAction";
import passEditedNews from "../../../redux/actions/news-actions/passEditedNewsAction";
import { Link } from "react-router-dom";

const News = ({ data }) => {
  const dispatch = useDispatch();
  const { title, content, newsImg, _id, newsDate } = data; // news_id can also be added in the destructing object

  const getNewsFromServer = (url) => dispatch(getNewsCollection(url));

  const errImg =
    "https://3dnews.ru/assets/external/illustrations/2021/08/25/1047562/So_it_begins_Call_of_the_One_Ring.jpg";
  const [imgSrc, setImgSrc] = useState(newsImg);
  const replaceImg = () => setImgSrc(errImg);

  const deleteThisNews = () => {
    // console.log(_id, title);
    dispatch(deleteNews(`http://localhost:4004/news/${_id}`));
    getNewsFromServer("http://localhost:4004/news");
  };

  return (
    <NewsStyled
      className="news-container article-container"
      style={{
        margin: "10px auto",
        maxWidth: "500px",
        position: "relative",
      }}
    >
      <div className="news-container-inner">
        <p className="news-date">{newsDate}</p>
        <div className="newsdata">
          <Link
            to="/addnews"
            className="news-title"
            onClick={() => dispatch(passEditedNews(data))}
          >
            {title}
          </Link>
          <p>{content}</p>
          <div className="news-img-container">
            <img
              src={newsImg ? newsImg : imgSrc}
              className="news-img"
              alt="news-img"
              onError={replaceImg}
            />
          </div>
        </div>
        <div className="news-actions">
          <button onClick={deleteThisNews}>Delete</button>
        </div>
      </div>
    </NewsStyled>
  );
};

export default News;
