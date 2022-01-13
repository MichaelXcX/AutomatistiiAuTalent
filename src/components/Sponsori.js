import React from "react";
import { Container, Image } from "react-bootstrap";

import magie from "../img/Magie.png";
import vodafone from "../img/Vodafone.png";
import worldclass from "../img/WorldClass.png";

function Sponsori() {
  return (
    <Container
      style={{
        position: "relative",

        width: "100vw",
        height: "auto",

        margin: "0",
        marginBottom: "5vh",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderBox: "border-box",
      }}
    >
      <h1>Sponsori: </h1>
      <br />
      <Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            src={vodafone}
            style={{ position: "relative", width: "50vw", height: "30vh" }}
            fluid
          ></Image>
          <br />
          <h1>Partener oficial</h1>
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            src={worldclass}
            style={{ position: "relative", width: "50vw", height: "40vh" }}
            fluid
          ></Image>
          <h1>Partener oficial</h1>
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Image
            src={magie}
            style={{ position: "relative", width: "40vw", height: "30vh" }}
            fluid
          ></Image>
          <br />
          <h1>Partener oficial</h1>
        </Container>
      </Container>
    </Container>
  );
}

export default Sponsori;
