// Import component bootstrap react
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body className="p-4">
              <h1>Express.Js + React.Js</h1>
              <p className="lead">
                Tutorial FullStack Express.js dan React.js oleh{" "}
                <strong>SantriKoding.com</strong>
              </p>
              <Button
                href="http://santrikoding.com"
                target="_blank"
                variant="primary"
                size="lg"
              >
                Selengkapnya
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
