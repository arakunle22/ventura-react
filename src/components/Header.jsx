import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar expand="md" className="header-container">
      <Navbar.Brand href="/">
        <img src="/Logo 1.png" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "show" : ""}>
        <Nav className="mr-auto">
          <Link to="/product" className="nav-link">Product</Link>
          <Link to="/apps" className="nav-link">Apps</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
        </Nav>
        <div className="end">
          <div className="video-section">
            <Button variant="outline-light" className="watch-video">
              <img src="/play-icon.png" alt="Video Icon" />
              Watch Video
            </Button>
          </div>
          <div className="download-section">
            <Button variant="primary" className="download-now">Download Now</Button>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
