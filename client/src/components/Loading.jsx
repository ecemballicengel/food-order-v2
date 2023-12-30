import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <Spinner
        animation="border"
        variant="danger"
        style={{ height: "100px", width: "150px" }}
      />
    </div>
  );
}

export default Loading;
