// Import hook useState dan useEffect from react
import { useState, useEffect } from "react";

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

// Import hook history dan params dari react router dom
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  // State
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // State validation
  const [validation, setValidation] = useState({});

  // Navigate
  const navigate = useNavigate();

  // Get ID from parameter URL
  const { id } = useParams();

  // Hook useEffect
  useEffect(() => {
    // Panggil function "getPostById"
    getPostById();
  }, []);

  // Function "getPostById"
  const getPostById = async () => {
    // Get data from server
    const response = await axios.get(`http://localhost:3000/api/posts/${id}`);

    // Get response data
    const data = await response.data.data;

    // Assign data to state
    setTitle(data.title);
    setContent(data.content);
  };

  // Function "updatePost"
  const updatePost = async (e) => {
    e.preventDefault();

    // Send data to server
    await axios
      .patch(`http://localhost:3000/api/posts/update/${id}`, {
        title: title,
        content: content,
      })
      .then(() => {
        // Redirect
        navigate(`/posts`);
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
                  <ul class="mt-0 mb-0">
                    {validation.errors.map((error, index) => (
                      <li key={index}>{`${error.param} : ${error.msg}`}</li>
                    ))}
                  </ul>
                </Alert>
              )}

              <Form onSubmit={updatePost}>
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
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EditPost;
