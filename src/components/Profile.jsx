import React from "react";

import { Row, Col, Card, Button, Image, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "./Loader";

const Profile = ({ order, loading, error }) => {
  return (
    <Row className="mt-5">
      <Col md={6} className="m-auto">
        <Card>
          <Card.Body>
            <Row className="mb-4">
              <Col>
                <LinkContainer to="/">
                  <Button variant="primary" block>
                    HOME
                  </Button>
                </LinkContainer>
              </Col>
              <Col>
                <LinkContainer to="/order">
                  <Button variant="secondary" block>
                    ORDER
                  </Button>
                </LinkContainer>
              </Col>
            </Row>
            <h2 className="text-center">PROFILE</h2>
            <Row>
              <Image
                src="https://secure.gravatar.com/avatar/05f26c23ba9926520765b0fad9552399?s=64"
                roundedCircle
                className="mt-2 mx-auto"
              />
            </Row>
            {loading || !order.user ? (
              <Loader />
            ) : error.length > 0 ? (
              <h4 className="mt-3">{error}</h4>
            ) : (
              <ListGroup variant="flush" className="mt-3">
                <ListGroup.Item>
                  <span className="text-primary text-left font-weight-bold">
                    ID:
                  </span>{" "}
                  {order.user.id}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-primary font-weight-bold">NAME:</span>{" "}
                  {order.user.name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-primary font-weight-bold">
                    ADDRESS:
                  </span>{" "}
                  {order.user.address}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-primary font-weight-bold">PHONE:</span>{" "}
                  {order.user.phone}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-primary font-weight-bold">ABOUT:</span>{" "}
                  {order.user.about}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-primary font-weight-bold">LIKES:</span>{" "}
                  {order.user.likes.map((like, index) => {
                    return like ===
                      order.user.likes[order.user.likes.length - 1] ? (
                      <span key={Math.random()}>{like}</span>
                    ) : (
                      <span key={Math.random()}>{`${like}, `}</span>
                    );
                  })}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-primary font-weight-bold">
                    DISLIKES:
                  </span>{" "}
                  {order.user.dislikes.map((dislike, index) => {
                    return dislike ===
                      order.user.dislikes[order.user.dislikes.length - 1] ? (
                      <span key={Math.random()}>{dislike}</span>
                    ) : (
                      <span key={Math.random()}>{`${dislike}, `}</span>
                    );
                  })}
                </ListGroup.Item>
              </ListGroup>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
