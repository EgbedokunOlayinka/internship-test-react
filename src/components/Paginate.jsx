import React from "react";
import { ListGroup, Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pageNumber, items }) => {
  let pageItems = 2;
  let numPages =
    items.length % pageItems === 0
      ? items.length / pageItems
      : Math.floor(items.length / pageItems);
  let pagerNumber = pageNumber > numPages ? numPages : pageNumber;
  let pageList = items.slice(
    pageItems * (pagerNumber - 1),
    pageItems * pagerNumber
  );

  return (
    <>
      <ListGroup variant="flush">
        {pageList.map((order) => (
          <ListGroup.Item key={Math.random()}>
            <p>
              <span className="text-primary text-left font-weight-bold">
                NAME:
              </span>{" "}
              {order.name}
            </p>
            <p>
              <span className="text-primary text-left font-weight-bold">
                CATEGORY
              </span>{" "}
              {order.category}
            </p>
            <p>
              <span className="text-primary text-left font-weight-bold">
                QUANTITY
              </span>{" "}
              {order.quantity}
            </p>
            <p>
              <span className="text-primary text-left font-weight-bold">
                PRICE:
              </span>{" "}
              {`₹${order.price}`}
            </p>
            <p>
              <span className="text-primary text-left font-weight-bold">
                TAX-PERCENTAGE
              </span>{" "}
              {`${order.tax_pct}%`}
            </p>
            <p>
              <span className="text-primary text-left font-weight-bold">
                TOTAL-PRICE:
              </span>{" "}
              {`₹${(order.tax_pct / 100) * order.price + order.price}`}
            </p>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {numPages > 1 && (
        <Pagination className="mt-2">
          {[...Array(numPages).keys()].map((x) => (
            <LinkContainer key={x + 1} to={`/order/${x + 1}`}>
              <Pagination.Item active={x + 1 === pagerNumber}>
                {x + 1}
              </Pagination.Item>
            </LinkContainer>
          ))}
        </Pagination>
      )}
    </>
  );
};

export default Paginate;
