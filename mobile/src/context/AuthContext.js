import * as SecureStore from "expo-secure-store";
import createDataContext from "./createDataContext";

// import validation
import { emailValidate } from "../utils/validation";

import { userLogin, userSignup } from "../api/api";

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { token: action.payload };
    case "logout":
      return { token: null };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await SecureStore.getItemAsync("token");
  if (token) {
    dispatch({ type: "login", payload: token });
  }
};

const login =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      if (!emailValidate(email)) {
        return "Invalid email address";
      }
      const token = await userLogin(email, password);
      await SecureStore.setItemAsync("token", token);
      dispatch({ type: "login", payload: token });
    } catch (err) {
      return err.response.data.body;
    }
  };

const logout = (dispatch) => async () => {
  await SecureStore.setItemAsync("token", "");
  dispatch({ type: "logout" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { login, logout, tryLocalSignin },
  { token: null }
);
