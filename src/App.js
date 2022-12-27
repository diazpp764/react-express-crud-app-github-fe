// Import component Bootstrap React
import { Navbar, Container, Nav } from "react-bootstrap";

// Import react router dom
import { Routes, Route, Link } from "react-router-dom";

// Import component Home
import Home from "./pages/Home";

// Import component Post Index
import IndexPost from "./pages/posts/Index";

// Import component Post Create
import CreatePost from "./pages/posts/Create";

// Import component Post Edit
import EditPost from "./pages/posts/Edit";

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Express.Js + React.Js</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/posts" className="nav-link">
                Posts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<IndexPost />} />
        <Route exact path="/posts/create" element={<CreatePost />} />
        <Route exact path="/posts/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
