import { useSelector, useDispatch } from "react-redux";
import { usersSelector } from "../../../redux/reducers/usersReducer";
import getUsersCollection from "../../../redux/actions/user-actions/getUsersAction";
import User from "../User/User";
import { UsersListStyled } from "./UsersListStyled";
import { useEffect } from "react";

const UsersList = () => {
  const dispatch = useDispatch();
  const getUsersFromServer = (url) => dispatch(getUsersCollection(url));

  useEffect(() => {
    getUsersFromServer("http://localhost:4004/users");
  });

  const users = useSelector(usersSelector);
  // console.log(users);

  return (
    <UsersListStyled>
      <div className="users-list">
        <h2>Users</h2>
        <div className="users-container">
          {users.map((user, i) => {
            return <User key={i} data={user} />;
          })}
        </div>
      </div>
    </UsersListStyled>
  );
};

export default UsersList;
