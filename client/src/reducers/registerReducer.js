export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        succsess: true,
        registeredUser: action.payload,
      };
    case "USER_REGISTER_FAILD":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
