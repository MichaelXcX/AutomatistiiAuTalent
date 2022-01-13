import React from "react";

import {
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Nav,
} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar
      bg="transparent"
      expand={false}
      style={{
        position: "relative",
        width: "100vw",
        height: "10%",
        padding: "2vh 4vw",
      }}
    >
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Automatiștii au Talent
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Concurenti</Nav.Link>
              <Nav.Link href="#action2">Rankings</Nav.Link>
              <NavDropdown title="Categorii" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Muzica</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Arte</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Activitati speciale
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Altele</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
