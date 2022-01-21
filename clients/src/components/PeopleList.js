import React, { useContext } from "react";
import { Context } from "..";
import { Container, Row } from "react-bootstrap";
import PeopleItem from "./PeopleItem";

const PeopleList = () => {
  const { people } = useContext(Context);

  return (
    <Container fluid="xl" className="d-flex peopleContainer">
      {people.peoples.map(people => (
        <Row key={people.id} xs={1} md={3} xl={4} className="g-4">
          <PeopleItem people={people} />
        </Row>
      ))}
    </Container>
  );
};

export default PeopleList;
