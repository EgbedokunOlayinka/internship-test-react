import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Row className="mt-5 loader">
      <Col className="m-auto">
        <Spinner
          animation="border"
          role="status"
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "block",
          }}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Col>
    </Row>
  );
};

export default Loader;
