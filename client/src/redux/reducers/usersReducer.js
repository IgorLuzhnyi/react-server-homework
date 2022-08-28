import { ADD_USER, DEL_USER, GET_USERS } from "../types/types";
// import { v4 as uuidv4 } from "uuid";

const initState = {
  users: [
    // {
    //   username: "richbaggins",
    //   fullname: "Frodo Baggins",
    //   avatar:
    //     "https://i.pinimg.com/474x/13/8d/db/138ddb61018e9b74f7fc4d9e1f1afdb6.jpg",
    //   user_id: uuidv4(),
    // },
    // {
    //   username: "shire_in_heart",
    //   fullname: "Samwise Gamgee",
    //   avatar:
    //     "http://3.bp.blogspot.com/-HVIVYOSspkw/Vj4_JPGlqCI/AAAAAAAAAk4/6PjCUURjido/w1200-h630-p-k-no-nu/samwise.jpg",
    //   user_id: uuidv4(),
    // },
    // {
    //   username: "greywizard",
    //   fullname: "Gandalf the Grey",
    //   avatar:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNGl_0Dcv4SQTmtaybn8utrib2OxiyIqVKA&usqp=CAU",
    //   user_id: uuidv4(),
    // },
  ],
};

const usersReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER:
      return { ...state, users: [...state.users, payload] };
    // case DEL_USER:
    //   return {
    //     ...state,
    //     users: state.users.filter((user) => user.user_id !== payload),
    //   };
    case GET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};

export const usersSelector = (state) => state.usersReducer.users;

export default usersReducer;
