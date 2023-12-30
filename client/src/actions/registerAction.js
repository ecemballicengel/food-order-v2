import axios from "axios";

export const registerUserAction = (user) => async (dispatch) => {
  dispatch({
    type: "USER_REGISTER_REQUEST",
  });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/register",
      user
    );

    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: response.data,
    });
    // window.location.href = "/login";
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAILD",
      payload: error,
    });
  }
};
