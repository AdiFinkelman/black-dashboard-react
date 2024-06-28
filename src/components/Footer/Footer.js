import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://github.com/AdiFinkelman/black-dashboard-react">
              Frontend Code
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/YairZeruya/Crypto-Project">
              Backend Code
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <b
            
            target="_blank"
          >
            Adi Finkelman & Yair Zeruya
          </b>{" "}
          for a better trading experience.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
