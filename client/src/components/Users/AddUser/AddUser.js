import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddUserStyled } from "./AddUserStyled";
import { validationFields } from "../../../constants/constants";
import { addUser } from "../../../redux/actions/usersActions";
import { useDispatch } from "react-redux";

const AddUser = () => {
  // Hooks
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // User placeholder
  const userPlaceholder = {
    username,
    fullname,
    avatar: imgUrl,
    user_id: uuidv4(),
  };

  // Logic
  const checkColorField = (e) =>
    validationFields[e.target.classList[0]].test(e.target.value)
      ? (e.target.closest(".input-wrapper").style.border = "2px solid green")
      : (e.target.closest(".input-wrapper").style.border = "2px solid red");

  const checkValueFields = () =>
    validationFields.fullname.test(fullname) &&
    validationFields.username.test(username);

  const addNewUser = () =>
    dispatch(addUser("http://localhost:4004/users", userPlaceholder));

  const clearInputs = () => {
    setFullname("");
    setUsername("");
    setImgUrl("");
  };

  const submitUser = () => {
    if (checkValueFields()) {
      addNewUser();
      clearInputs();
    }
  };

  useEffect(() => {}, [fullname, username]);

  // Component itself
  return (
    <AddUserStyled>
      <div className="add-user-container">
        <div className="add-user-form article-container">
          <h2>Add a new user:</h2>
          <div className="input-wrapper">
            <input
              type="text"
              className="fullname"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => {
                checkColorField(e);
                setFullname(e.target.value);
              }}
            />
          </div>
          <div className=" input-wrapper">
            <input
              type="text"
              className="username"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                checkColorField(e);
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              className="user-img"
              placeholder="avatar url..."
              value={imgUrl}
              onChange={(e) => {
                setImgUrl(e.target.value);
              }}
            />
          </div>
          <button onClick={submitUser}>Add User</button>
        </div>
      </div>
    </AddUserStyled>
  );
};

export default AddUser;
