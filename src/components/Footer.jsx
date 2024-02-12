import React from 'react';
import { Image, Form, Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-row">
        <div className="footer-col footer-logo">
          <Image src="/Logo 2.png" alt="Logo" />
          <div className="footer-description">
            <div className="footer-description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="footer-social">
            <a href='/social'><Image src="/Soc1.png" alt="Social Icon" /></a>
            <a href='/social'><Image src="/Soc2.png" alt="Social Icon" /></a>
            <a href='/social'><Image src="/Soc3.png" alt="Social Icon" /></a>
          </div>
        </div>

        <div className='links-row'>
        <div className="footer-col footer-links">
          <div className="footer-section">
            <div className="footer-title">Company</div>
            <a href="/products" className="footer-link">Products</a>
            <a href="/apps" className="footer-link">Apps</a>
            <a href="/blog" className="footer-link">Blogs</a>
            <a href="/pricing" className="footer-link">Pricing</a>
          </div>
        </div>
        <div className="footer-col footer-links">
          <div className="footer-section">
            <div className="footer-title">Resources</div>
            <a href="/template" className="footer-link">Template</a>
            <a href="/invoice" className="footer-link">Invoice</a>
            <a href="/feature1" className="footer-link">Feature </a>
            <a href="/feature2" className="footer-link">Feature</a>
          </div>
        </div>
        </div>
        <div className="footer-col footer-newsletter">
          <div className="footer-end">Join Our Newsletter</div>
          <Form>
            <Form.Group controlId="formBasicEmail" className="footer-input-container">
              <Form.Control type="email" placeholder="Your email address" />
            </Form.Group>
            <ul className="bullet-list">
              <li className="footer-description-text">
                Will send you weekly updates for your better finance management
              </li>
            </ul>
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </Form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
