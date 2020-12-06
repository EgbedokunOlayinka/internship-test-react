import React from "react";

import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "./Loader";
import Paginate from "./Paginate";

const Order = ({
  loading,
  error,
  order: { user, restaurant, items },
  match,
}) => {
  const pageNumber = match.params.pageNumber || 1;

  return (
    <>
      <Row className="mt-3">
        <Col md={6} className="mx-auto">
          <Row>
            <Col md={6} className="my-2">
              <LinkContainer to="/">
                <Button variant="primary" block>
                  HOME
                </Button>
              </LinkContainer>
            </Col>
            <Col md={6} className="my-2">
              <LinkContainer to="/profile">
                <Button variant="secondary" block>
                  PROFILE
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        </Col>
      </Row>
      <h2 className="text-center mt-3">ORDER SUMMARY</h2>
      {loading || !user ? (
        <Loader />
      ) : error.length > 0 ? (
        <h4 className="mt-3">{error}</h4>
      ) : (
        <Row>
          <Col md={6} className="my-3">
            <p>
              <span className="text-primary font-weight-bold">NAME:</span>{" "}
              {user.name}
            </p>
            <p>
              <span className="text-primary font-weight-bold">ADDRESS:</span>{" "}
              {user.address}
            </p>
            <p>
              <span className="text-primary font-weight-bold">PHONE:</span>{" "}
              {user.phone}
            </p>
            <p>
              <span className="text-primary font-weight-bold">RESTAURANT:</span>{" "}
              {`${restaurant.name}, ${restaurant.street}, ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}.`}
            </p>
            <p>
              <span className="text-primary font-weight-bold">
                TOTAL ITEM NUMBER:
              </span>{" "}
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </p>
            <p>
              <span className="text-primary font-weight-bold">TOTAL BILL:</span>{" "}
              {items.reduce(
                (sum, item) =>
                  sum + ((item.tax_pct / 100) * item.price + item.price),
                0
              )}
            </p>
          </Col>
          <Col md={6} className="my-2">
            <h4>ORDER ITEMS</h4>
            <Paginate pageNumber={pageNumber} items={items} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default Order;
