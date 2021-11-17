import React, { useContext } from "react";
import { Context } from "..";
import { Col, Row } from "react-bootstrap";
import PeopleItem from "./PeopleItem";
//import { observe } from "mobx";

const PeopleList = () => {
  const { people } = useContext(Context);

  console.log('people', people);

  return (
    <Col className="d-flex">
      {people.peoples.map(people => (
        <PeopleItem key={people.id} people={people} />
      ))}
    </Col>
  );
};

export default PeopleList;
