import React, { useContext } from "react";
import { Context } from "..";
import { Col, Row } from "react-bootstrap";
import PeopleItem from "./PeopleItem";
//import { observe } from "mobx";

const PeopleList = () => {
  const { people } = useContext(Context);
  return (
    <Row className="d-flex">
      {people.peoples.map(people => (
        <PeopleItem key={people.id} people={people} />
      ))}
    </Row>
  );
};
// const PeopleList = observe(() => {
//   const { people } = useContext(Context);
//   return (
//     <Row className="d-flex">
//       {people.peoples.map(people => 
//         <PeopleItem key={people.id} people={people} />
//       )}
//     </Row>
//   );
// });



export default PeopleList;
