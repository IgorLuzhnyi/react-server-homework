import { UserStyled } from "./UserStyled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import deleteUser from "../../../redux/actions/user-actions/deleteUserAction";
import getUsersCollection from "../../../redux/actions/user-actions/getUsersAction";

const User = ({ data }) => {
  const dispatch = useDispatch();
  const { username, fullname, avatar, _id } = data; // user_id can also be added in the destructing object

  const getUsersFromServer = (url) => dispatch(getUsersCollection(url));

  const errImg =
    "https://i.pinimg.com/originals/ac/49/ca/ac49cade88da350474e82a8e49545c56.jpg";
  const [imgSrc, setImgSrc] = useState(avatar);
  const replaceImg = () => setImgSrc(errImg);

  const deleteThisUser = () => {
    // console.log(_id, username);
    dispatch(deleteUser(`http://localhost:4004/users/${_id}`));
    getUsersFromServer("http://localhost:4004/users");
  };

  return (
    <UserStyled className="user-container" style={{ margin: "10px 0" }}>
      <div className="user-container-inner">
        <div className="avatar-container">
          <img
            src={avatar ? avatar : imgSrc}
            className="avatar-img"
            alt="user-avatar"
            onError={replaceImg}
          />
        </div>
        <div className="userdata">
          <p>
            Username: <span>{username}</span>
          </p>
          <p>
            Full name: <span>{fullname}</span>
          </p>
        </div>
        <div className="user-actions">
          {/* <button>Edit</button> */}
          <button onClick={deleteThisUser}>Delete</button>
        </div>
      </div>
    </UserStyled>
  );
};

export default User;
