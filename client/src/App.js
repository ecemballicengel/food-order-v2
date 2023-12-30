import "./App.css";

import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import LoginRegisterTab from "./components/LoginRegisterTab";
import OrdersPage from "./pages/OrdersPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginRegisterTab />}></Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/sepet" element={<CartPage />} />
        <Route path="/myorders" element={<OrdersPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
