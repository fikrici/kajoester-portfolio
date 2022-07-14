import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <p></p>
          <br></br>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/fikrixjoe/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/Fumi89/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/kajovent/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Created With&nbsp;  
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill text-danger" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
              &nbsp; by <a href="https://www.instagram.com/kajovent/" class="text-white fw-bold">Kajovent</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
