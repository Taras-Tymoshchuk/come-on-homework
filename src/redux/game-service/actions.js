import { GET_GAMES, GET_CATEGORIES } from "../action-types";
import axios from "../../utils/API";

export const getGames = () => async (dispatch) => {
  try {
    const res = await axios.get("/games");
    dispatch({ type: GET_GAMES, payload: res.data });
  } catch (error) {
    return console.error(error);
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("/categories");
    dispatch({ type: GET_CATEGORIES, payload: res.data });
  } catch (error) {
    return console.error(error);
  }
};
