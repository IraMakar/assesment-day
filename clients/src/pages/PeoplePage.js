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
  //const people = {id: 1, name: "ппп", surname: "впарпор", description: "вапро", sum_mark: 5, img: `https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg`}
  const [people, setPeople] = useState({ info: [] }); //
  const { id } = useParams();
  useEffect(() => {
    //
    fetchOnePeople(id).then((data) => setPeople(data)); //
  }, []); //

  const [comentVisible, setComentVisible] = useState(false);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            heght={300}
            src={"http://localhost:5000/" + people.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center justify-content-center">
            <h2>{people.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 275,
                height: 270,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {people.sum_mark}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>шось {people.description} там</h3>

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
