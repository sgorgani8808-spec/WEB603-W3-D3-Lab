import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2 className="signin-title">Sign In</h2>
        <p className="signin-subtitle">Please login using one of the following:</p>

        <div className="signin-content">
          <Form className="signin-form" onSubmit={handleLogin}>
            <Form.Group className="mb-2">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>

            <Button variant="success" type="submit" size="sm">
              Login
            </Button>
          </Form>

          <Button
            variant="primary"
            className="facebook-btn"
            onClick={handleLogin}
          >
            f LOGIN WITH FACEBOOK
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;