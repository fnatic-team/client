import { GET_DATA_SPEAKERS, GET_SPEAKERS_DETAILS } from "./types";

export const fetchAllSpeakers = () => async (dispatch) => {
  let url =
    "https://narasumber-backend.herokuapp.com/api/user/activeSpeaker";

  let options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  let response = await fetch(url, options);
  let results = await response.json();
  console.log(results);
  

  dispatch({
    type: GET_DATA_SPEAKERS,
    payload: results,
  });
};

export const getSpeakerDetails = (id) => async (dispatch) => {
  let url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/user/activeSpeaker/${id}`;

  let options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  let response = await fetch(url, options);
  let results = await response.json();
  
  dispatch({
    type: GET_SPEAKERS_DETAILS,
    payload: results,
  });
};


export {GET_DATA_SPEAKERS, GET_SPEAKERS_DETAILS}