import { Button, Card, Container, Form } from "react-bootstrap";

export default function Login() {
  return (
    <Container
      fluid
      className="min-vh-100 bg-light d-flex flex-column justify-content-center align-items-center user-select-none"
    >
      <Card className="shadow-lg" style={{ width: "28em" }}>
        <Card.Img src="./assets/login-bgimg.png" />
        <Card.Body>
          <div>
            <h1 className="fs-4 fw-bold">Myblog Login</h1>
          </div>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control className="shadow-none" type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button className="shadow-none px-4" size="sm">
              Login
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
