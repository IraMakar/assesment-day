import React, { useContext, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Context } from "..";
import PeopleList from "../components/PeopleList";
import { fetchPeople } from "../http/peopleAPI";


  const Main = () => {
    const {people} = useContext(Context)        

useEffect( () => {
    fetchPeople().then(data => people.setPeoples(data.rows))
}
)

  return (
    <Container>
      <Row className="mt-10 ml-45">
        <Col md={3}>
          <PeopleList />
        </Col>
        <Col md={3}>
          <PeopleList />
        </Col>
      </Row>
    </Container>
  );
  };

export default Main;
