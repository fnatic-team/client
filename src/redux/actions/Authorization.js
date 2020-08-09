import { GET_AUTHORIZATION } from "./types";
import jwt_decode from 'jwt-decode'


export const fetchToken = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    let tokenDecoded = null;

    if (token !== null) {
        // eslint-disable-next-line
        tokenDecoded = jwt_decode(token);
      }
      
    dispatch({
      type: GET_AUTHORIZATION,
      payload: tokenDecoded,
    });
  };