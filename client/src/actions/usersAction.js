import axios from "axios";
import Swal from "sweetalert2";
//getAllUsers

export const getAllUsersAction = () => async (dispatch) => {
  dispatch({
    type: "GET_ALL_USERS_REQUEST",
  });
  try {
    const response = await axios.get(
      "http://localhost:4000/api/users/getAllUsers"
    );
    dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_USERS_FAILD", payload: error });
  }
};

export const deleteUserAction = (userid) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/deleteUser",
      { userid }
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Basarili bir sekilde sildiniz",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.log(error);
  }
};
