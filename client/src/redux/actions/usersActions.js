import { ADD_USER } from "../types/types";
import axios from "axios";

const newUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const addUser = (url, user) => {
  return (dispatch) => {
    axios.post(url, user).then(({ data }) => dispatch(newUser(data)));
  };
};
