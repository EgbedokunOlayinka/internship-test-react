import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "./bootstrap.min.css";

import { Container } from "react-bootstrap";

import Profile from "./components/Profile";
import Welcome from "./components/Welcome";
import Order from "./components/Order";
import Loader from "./components/Loader";

const App = () => {
  const [order, setOrder] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios(
          "https://indapi.kumba.io/webdev/assignment"
        );
        setOrder(data);
        setError("");
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(
          "An error occurred while fetching the data. Please try again."
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Container>
        {loading ? (
          <Loader />
        ) : error.length > 0 ? (
          <h4 className="mt-3">{error}</h4>
        ) : (
          <>
            <Route exact path="/" component={Welcome} />
            <Route
              exact
              path="/profile"
              component={() => (
                <Profile order={order} loading={loading} error={error} />
              )}
            />
            <Route
              exact
              path="/order"
              render={({ match }) => (
                <Order
                  order={order}
                  loading={loading}
                  error={error}
                  match={match}
                />
              )}
            />
            <Route
              exact
              path="/order/:pageNumber"
              render={({ match }) => (
                <Order
                  order={order}
                  loading={loading}
                  error={error}
                  match={match}
                />
              )}
            />
          </>
        )}
      </Container>
    </Router>
  );
};

export default App;
