import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Cards.css";

function Cards() {
  return (
    <Container
      className="d-flex flex-row justify-content-center align-items-center full-width"
      style={{ margin: "0" }}
    >
      <Card className="card-dim" id="muzica">
        <Card.Body>
          <Card.Title>Muzica</Card.Title>
          <Card.Text>
            Vecinii nu mai suporta sa te auda cantand toata ziua? Noi vrem sa
            vedem daca au de ce sa nu te mai sufere!
          </Card.Text>
          <Button>Inscrie-te</Button>
        </Card.Body>
      </Card>
      <Card className="card-dim" id="desen">
        <Card.Body>
          <Card.Title>Desen</Card.Title>
          <Card.Text>
            Ai atat de multe pensule si culori prin casa de nu mai ai loc? Noi
            iti spunem daca se merita sa le mai pastrezi!
          </Card.Text>
          <Button>Inscrie-te</Button>
        </Card.Body>
      </Card>
      <Card className="card-dim" id="altele">
        <Card.Body>
          <Card.Title>Altele</Card.Title>
          <Card.Text>
            Reusesti sa ragai tot alfabetul, dar prietenii tai spun ca e
            scarbos? Noi acordam doar punctaje si oportunitati, nu te judecam!
          </Card.Text>
          <Button>Inscrie-te</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Cards;
