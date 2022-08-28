import { DEL_USER } from "../types/types";
import axios from "axios";

const delUser = (user) => {
  return {
    type: DEL_USER,
    payload: user,
  };
};

function deleteUser(url) {
  return (dispatch) => {
    axios.delete(url).then(({ data }) => dispatch(delUser(data)));
  };
}

export default deleteUser;
