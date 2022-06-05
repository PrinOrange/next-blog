import { Button, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { FaPen,FaDoorOpen } from "react-icons/fa";
import DocEditor from "../view/DocEditor";
export default function PanelIndex() {
  return (
    <Container className="bg-light min-vh-100">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="min-vh-100">
          <Col className="d-flex flex-column justify-content-center" xs={2} md={2} lg={2} xl={2}>
            <Card style={{ height: "30em" }}>
              <Card.Body className="d-flex flex-column justify-content-between">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <FaPen className="mx-2" />
                      {"写博客"}
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex flex-column justify-content-center min-vh-100"  xs={10} md={10} lg={10} xl={10}>
            <Card className="min-vh-75">
              <Card.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <DocEditor/>
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
