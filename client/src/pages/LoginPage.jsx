import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../actions/loginAction";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const { error, currentUser } = userState;
  const navigate = useNavigate();

  const loginHandler = () => {
    if (mail == "" || password == "") {
      Swal.fire("Eksik alanları doldurunuz");
    } else {
      const kullanici = {
        mail: mail,
        password: password,
      };
      dispatch(loginUserAction(kullanici));
      if (!error) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Giriş Başarılı",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Giriş hatalı!",
        });
      }
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div style={{ paddingTop: "10%" }}>
      <div className="container w-50 bg-warning" style={{ height: "350px" }}>
        <div className="row">
          <h2 className="display-4" style={{ color: "red" }}>
            Kullanici Giris Ekrani
          </h2>
        </div>
        <form className="mx-auto" style={{ paddingTop: "50px" }}>
          <input
            type="email"
            placeholder="Emailinizi Giriniz"
            className="form-control my-3"
            onChange={(e) => setMail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Sifrenizi Giriniz"
            className="form-control my-3"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="btn btn-danger w-50 m-auto mt-5"
            onClick={loginHandler}
          >
            Giris Yap
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
