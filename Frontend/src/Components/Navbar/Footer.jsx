import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5">
      <Container>
        <Row className="g-4">
          <Col xs={12} md={4}>
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li>Help Centre</li>
              <li>Get help with a safety issue</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h6 className="fw-bold">Hosting</h6>
            <ul className="list-unstyled">
              <li>Airbnb your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Join a free Hosting class</li>
              <li>Find a co-host</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h6 className="fw-bold">Airbnb</h6>
            <ul className="list-unstyled">
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="justify-content-between text-muted">
          <Col xs={12} md={6}>
            <small>
              © 2025 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details
            </small>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <small>
              🌐 English (IN) ₹ INR &nbsp;
              <i className="bi bi-facebook mx-1"></i>
              <i className="bi bi-twitter mx-1"></i>
              <i className="bi bi-instagram mx-1"></i>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
