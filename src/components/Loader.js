import React from "react";
import { Spinner } from "react-bootstrap";

export default () => {
  return (
    <div>
      <Spinner animation="border" variant="light" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="border" variant="light" />
    </div>
  );
};

// export default () => <Loader type="ThreeDots" color="#00BFFF" />;
