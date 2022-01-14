import React from "react";
import { Container, Card, Button, Image } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";

import foarfece from "../img/scissors.png";
import vizualizari from "../img/visibility.png";

function Number1() {
  const [flip, set] = React.useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    to: { number: 1256 },
    delay: 400,
    config: config.molasses,
    onRest: () => set(flip),
  });

  return (
    <animated.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {number.to((number) => Math.floor(number))}
    </animated.div>
  );
}

function Number2() {
  const [flip, set] = React.useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    to: { number: 5245 },
    delay: 400,
    config: config.molasses,
    onRest: () => set(flip),
  });

  return (
    <animated.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {number.to((number) => Math.floor(number))}
    </animated.div>
  );
}

function Flex() {
  return (
    <Container style={{ margin: "10vh 0 20vh 0 " }}>
      <Card className="text-center">
        <Card.Header>
          <b>Top cele mai apreciate talente</b>
        </Card.Header>
        <Card.Body>
          <Card.Title>Categoria Muzica</Card.Title>
          <Card.Text>
            <h3>Popescu Ion - Wish you were here (cover)</h3>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: " center",
                  margin: "1vh 2vw",
                }}
              >
                <Image
                  src={foarfece}
                  style={{
                    position: "relative",
                    width: "2rem",
                    height: "2rem",
                  }}
                />
                <Number1 />
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: " center",
                  margin: "1vh 2vw",
                }}
              >
                <Image
                  src={vizualizari}
                  style={{
                    position: "relative",
                    width: "2rem",
                    height: "2rem",
                  }}
                />
                <Number2 />
              </div>
            </div>
          </Card.Text>
          <Button variant="primary">Link</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Flex;
