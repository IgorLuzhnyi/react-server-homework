import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddNewsStyled } from "./AddNewsStyled";
import { addNews } from "../../../redux/actions/news-actions/addNewsAction";
import { useSelector, useDispatch } from "react-redux";
import passEditedNews from "../../../redux/actions/news-actions/passEditedNewsAction";
import { editedNewsSelector } from "../../../redux/reducers/newsReducer";
import updateNews from "../../../redux/actions/news-actions/updNewsAction";

const AddNews = () => {
  // Hooks
  const editedUser = useSelector(editedNewsSelector);

  const dispatch = useDispatch();
  const [title, setTitle] = useState(editedUser ? editedUser.title : "");
  const [content, setContent] = useState(editedUser ? editedUser.content : "");
  const [imgUrl, setImgUrl] = useState(editedUser ? editedUser.imgUrl : "");

  // User placeholder
  const newsPlaceholder = {
    title,
    content,
    newsImg: imgUrl,
    newsDate: "",
    user_id: uuidv4(),
  };

  // Logic
  const addNewNews = () =>
    dispatch(addNews("http://localhost:4004/news", newsPlaceholder));

  const updThisNews = (url, data) => dispatch(updateNews(url, data));

  const clearInputs = () => {
    setTitle("");
    setContent("");
    setImgUrl("");
  };

  const submitNews = () => {
    newsPlaceholder.newsDate = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    editedUser
      ? updThisNews(
          `http://localhost:4004/news/${editedUser._id}`,
          newsPlaceholder
        )
      : addNewNews();
    clearInputs();
    dispatch(passEditedNews()); // editedUser becomes null here immediately
  };

  // Component itself
  return (
    <AddNewsStyled>
      <div className="add-news-container">
        <div className="add-news-form article-container">
          <h2>Add news:</h2>
          <div className="input-wrapper">
            <input
              type="text"
              className="form-title"
              placeholder="News Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <textarea
              type="text"
              rows="4"
              className="form-content"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              className="form-news-img"
              placeholder="add image to the news..."
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          <button onClick={submitNews}>Add News</button>
        </div>
      </div>
    </AddNewsStyled>
  );
};

export default AddNews;
