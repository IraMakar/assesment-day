//import { observe } from "mobx";
import React, { useContext, useEffect, useState } from "react";
//import React, { useContext } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Context } from "..";
import Pages from "../components/Pages";
import PeopleList from "../components/PeopleList";
import { fetchPeople } from "../http/peopleAPI";

const Main = () => {
  const context = useContext(Context);
  const { people } = context;

  useEffect( () => {
    fetchPeople(1, 4).then((data) => {
      people.setPeoples(data.rows);
      people.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchPeople(people.page, 4).then((data) => {
      console.log('page 2', data);
      people.setPeoples(data.rows);
      people.setTotalCount(data.count);
    });
  }, [people.page]);

  return (
    <Container>
       <Row className="mt-10 ml-45">
        <Col md={3}>
          <PeopleList />
          <Pages />
        </Col>
       </Row>
    </Container>
  );
};

export default Main;
