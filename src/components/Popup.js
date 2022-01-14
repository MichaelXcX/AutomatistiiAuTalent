import React from "react";
import { Container, Modal, Button, Form, Col, Row } from "react-bootstrap";

function Popup(props) {
  return (
    <Container>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign-up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Nume
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Nume" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Prenume
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Prenume" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Talente
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Muzica"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Arte"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="Activitati sportive"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    type="radio"
                    label="Altele"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios4"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalCheck"
            ></Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Inregistreaza-te</Button>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Popup;
