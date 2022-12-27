// Import hook useState from react
import { useState } from "react";

// Import component Bootstrap React
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

// Import axios
import axios from "axios";

// Import hook navigate dari react router dom
import { useNavigate } from "react-router-dom";

function CreatePost() {
  // State
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // State validation
  const [validation, setValidation] = useState({});

  // Navigate
  const navigate = useNavigate();

  // Method "storePost"
  const storePost = async (e) => {
    e.preventDefault();
    console.log("Disubmit");

    // Send data to server
    await axios
      .post("http://localhost:3000/api/posts/store", {
        title: title,
        content: content,
      })
      .then(() => {
        // Redirect
        navigate("/posts");
      })
      .catch((error) => {
        // Assign validation on state
        setValidation(error.response.data);
      });
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              {validation.errors && (
                <Alert variant="danger">
                  <ul className="mt-0 mb-0">
                    {validation.errors.map((error, index) => (
                      <li key={index}>{`${error.param} : ${error.msg}`}</li>
                    ))}
                  </ul>
                </Alert>
              )}

              <Form onSubmit={storePost}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Masukkan Judul"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Masukkan Konten"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Simpan
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CreatePost;
