import React from "react";

import { Row, Col, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const WelcomeScreen = () => {
  return (
    <Row className="mt-5">
      <Col md={6} className="m-auto">
        <Card>
          <Card.Body className="text-center">
            <h1>
              <i className="fab fa-react fa-3x"></i>
            </h1>
            <LinkContainer to="/profile">
              <Button variant="primary" className="mb-3 mt-2" block>
                PROFILE
              </Button>
            </LinkContainer>
            <LinkContainer to="/order">
              <Button variant="secondary" className="mb-2" block>
                ORDER
              </Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default WelcomeScreen;
