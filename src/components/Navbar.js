import React from "react";

import { Navbar, Container, NavDropdown, Nav, Image } from "react-bootstrap";

import insta from "../img/instagram.png";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{
        position: "relative",

        width: "100vw",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      sticky-top
    >
      <Container
        style={{
          margin: "0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Navbar.Brand href="https://www.youtube.com/watch?v=z-nfbDXTiHg&ab_channel=DanielePiludu">
          Katana and the InsomniACS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.youtube.com/watch?v=t8sutdiflKE&ab_channel=CXNRAD">
              Voteaza
            </Nav.Link>
            <NavDropdown title="Categorii" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                Muzica
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/watch?v=PFg8nY5rG80&ab_channel=TreyKennedy">
                Arte
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/watch?v=jMU8ZAHx_I0&ab_channel=FunnyOrDie">
                Activitati sportive
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/watch?v=ITU5Dd7zhbE&ab_channel=iUmor">
                Alter
              </NavDropdown.Item>

              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.instagram.com/amtalent_lsacbucuresti/">
              <Image
                src={insta}
                style={{ position: "relative", width: "2rem", height: "2rem" }}
              />{" "}
              Instagram
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
