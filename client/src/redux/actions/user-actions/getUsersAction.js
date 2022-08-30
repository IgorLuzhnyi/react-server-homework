import { GET_USERS } from "../../types/types";
import axios from "axios";

const getUsers = (users) => {
  return {
    type: GET_USERS,
    payload: users,
  };
};

const getUsersCollection = (url) => (dispatch) =>
  axios.get(url).then(({ data }) => dispatch(getUsers(data)));

export default getUsersCollection;
