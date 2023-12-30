import React, { useEffect } from "react";
import menuler from "../yemekdata";
import MenuList from "../components/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { getAllBurgers } from "../actions/burgerAction";
import Loading from "../components/Loading";
import Coursel from "../components/Coursel";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();

  const burgerState = useSelector((state) => state.getAllBurgersReducer);

  const { burgers, loading } = burgerState;
  console.log(burgers);
  const navigate = useNavigate();

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (currentUser) {
      dispatch(getAllBurgers());
    } else {
      navigate("/login");
    }
  }, [currentUser]);

  return (
    <div>
      <Navbar />
      <Coursel />
      <div className="row">
        {loading ? (
          <Loading />
        ) : (
          burgers.map((menu) => (
            <div className="col-md-4">
              <MenuList menu={menu} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
