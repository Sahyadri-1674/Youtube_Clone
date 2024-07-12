import { signInWithPopup, signOut, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../firbase";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const result = await signInWithPopup(auth, provider).catch((error) => {
      console.error(error);
    });
    const token = result.user.accessToken;
    const profile = {
      name: result.user.displayName,
      photoURL: result.user.photoURL,
    };

    sessionStorage.setItem("ytc-access-token", token);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: token,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};
