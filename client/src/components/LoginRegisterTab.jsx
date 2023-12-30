import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

function LoginRegisterTab() {
  return (
    <div>
      <Tabs
        defaultActiveKey="login"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="login" title="Login">
          <LoginPage />
        </Tab>
        <Tab eventKey="register" title="Register">
          <RegisterPage />
        </Tab>
      </Tabs>
    </div>
  );
}

export default LoginRegisterTab;
