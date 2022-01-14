import React from "react";
import { Card, Button, Container } from "react-bootstrap";

import Popup from "./Popup";

import "bootstrap/dist/css/bootstrap.css";
import "./Cards.css";

import muzica from "../img/violin.jpg";
import sport from "../img/Sport.jpg";
import arte from "../img/Monalisa.jfif";
import altele from "../img/Magic.jpg";

function Cards(props) {
  const [popupShow, setPopupShow] = React.useState(false);

  return (
    <div>
      <Container className="full-width container-card">
        <Card className="card-dim" id="muzica">
          <Card.Body>
            <Card.Title>Muzica</Card.Title>
            <Card.Text>
              Vecinii nu mai suporta sa te auda cantand toata ziua? Noi vrem sa
              vedem daca au de ce sa nu te mai sufere!
            </Card.Text>
            <Button className="custom-btn" onClick={() => setPopupShow(true)}>
              Inscrie-te
            </Button>
          </Card.Body>
          <Card.Img variant="bottom" src={muzica} />
        </Card>
        <Card className="card-dim" id="desen">
          <Card.Body>
            <Card.Title>Desen</Card.Title>
            <Card.Text>
              Ai atat de multe pensule si culori prin casa de nu mai ai loc? Noi
              iti spunem daca se merita sa le mai pastrezi!
            </Card.Text>
            <Button className="custom-btn" onClick={() => setPopupShow(true)}>
              Inscrie-te
            </Button>
          </Card.Body>
          <Card.Img variant="bottom" src={arte} />
        </Card>
        <Card className="card-dim" id="altele">
          <Card.Body>
            <Card.Title>Activitati sportive</Card.Title>
            <Card.Text>
              Tragi de fiare si urlii in sala ca sa vada toti cat de hardcore
              esti? Arata-ne si noua, noi nu iti vom spune sa tipi mai incet.
            </Card.Text>
            <Button className="custom-btn" onClick={() => setPopupShow(true)}>
              Inscrie-te
            </Button>
          </Card.Body>
          <Card.Img variant="bottom" src={sport} />
        </Card>
        <Card className="card-dim" id="altele">
          <Card.Body>
            <Card.Title>Altele</Card.Title>
            <Card.Text>
              Reusesti sa ragai tot alfabetul, dar prietenii tai spun ca e
              scarbos? Noi acordam doar punctaje si oportunitati, nu te judecam!
            </Card.Text>
            <Button className="custom-btn" onClick={() => setPopupShow(true)}>
              Inscrie-te
            </Button>
          </Card.Body>
          <Card.Img variant="bottom" src={altele} />
        </Card>
      </Container>
      <Popup show={popupShow} onHide={() => setPopupShow(false)} />
    </div>
  );
}

export default Cards;
