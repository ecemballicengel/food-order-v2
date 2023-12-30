import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  addBurgerReducer,
  editBurgerReducer,
  getAllBurgersReducer,
  getBurgerByIdReducer,
} from "./reducers/burgerReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";
import { loginUserReducer } from "./reducers/loginReducer";
import { registerUserReducer } from "./reducers/registerReducer";
import {
  checkoutOrderReducer,
  getAllOrdersReducer,
  getUsersOrdersReducer,
} from "./reducers/orderReducer";
import { getAllUsersReducer } from "./reducers/usersReducer";

const finalReducer = combineReducers({
  getAllBurgersReducer: getAllBurgersReducer,
  cartReducer: cartReducer,
  loginUserReducer: loginUserReducer,
  registerUserReducer: registerUserReducer,
  checkoutOrderReducer: checkoutOrderReducer,
  getUsersOrdersReducer: getUsersOrdersReducer,
  getAllOrdersReducer: getAllOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
  editBurgerReducer: editBurgerReducer,
  getBurgerByIdReducer: getBurgerByIdReducer,
  addBurgerReducer: addBurgerReducer,
});
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const compose = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  compose(applyMiddleware(thunk))
);
export default store;
