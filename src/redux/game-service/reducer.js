import { GET_GAMES, GET_CATEGORIES } from "../action-types";
const initState = {
  games: [],
  categories: [],
};

const gamesReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
export default gamesReducer;
