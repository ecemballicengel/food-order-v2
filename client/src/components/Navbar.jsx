import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUserAction } from "../actions/loginAction";

function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUserAction());
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      if (currentUser.isAdmin != true) {
        // navigate("/");
      }
    }
  }, [currentUser]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <img
            style={{ height: "65px" }}
            src="https://png.pngtree.com/png-clipart/20230520/original/pngtree-burger-logo-png-image_9166715.png"
            alt=""
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Urunler
                </Link>
              </li>
              {currentUser && currentUser.isAdmin == true ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>
              ) : (
                <div></div>
              )}
            </ul>
            {currentUser ? (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item" style={{ color: "crimson" }}>
                  <Link className="nav-link" to="/myorders">
                    Hosgeldiniz:{currentUser.name}
                    {""}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/myorders">
                    Siparisler
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sepet">
                    Sepet
                    <i className="fa-solid fa-cart-shopping fa-beat mx-2"></i>
                    <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-white text-danger px-2">
                      {cartItems.length}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={logoutHandler}>
                    Cikis
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Giriş Yap
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Kayıt Ol
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
