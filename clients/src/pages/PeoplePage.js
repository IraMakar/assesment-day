import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import EnterPlusForPeople from "../components/modals/EnterPlusForPeople";
import { useState } from "react";

import { useParams } from "react-router"; //
import { fetchOnePeople } from "../http/peopleAPI"; //

const PeoplePage = () => {
  const [people, setPeople] = useState({ info: [] }); //
  const { id } = useParams();
  useEffect(() => {
    fetchOnePeople(id).then((data) => setPeople(data)); //
  }, []); 

  const [comentVisible, setComentVisible] = useState(false);

  return (
    <Container fluid>
      <Row className="d-flex flex-column align-items-center justify-content-center">
        {people.img && (
          <Col md={3} className="d-flex flex-column align-items-center justify-content-center" style={{ marginTop: 75 }}>
            <Image
              width={300}
              src={`${process.env.REACT_APP_SERVER_URL}/${people.img}`}
            />
            <h2>{people.name} {people.surname}</h2>
          </Col>
        )}
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              padding: 20,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 140,
                height: 130,
                backgroundSize: "cover",
                fontSize: 30,
              }}
            >
              {people.sum_mark}
            </div>
            <h3> {people.description} </h3>

            <Button
              variant={"outline-dark"}
              onClick={() => setComentVisible(true)}
            >
              Поставити плюсик
            </Button>
            <EnterPlusForPeople
              show={comentVisible}
              onHide={() => setComentVisible(false)}
              currentMark={people.sum_mark}
              peopleId={id}
              onSuccess={() => {
                fetchOnePeople(id).then((data) => setPeople(data));
              }}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PeoplePage;
