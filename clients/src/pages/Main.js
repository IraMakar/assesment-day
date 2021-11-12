//import { observe } from "mobx";
import React, { useContext, useEffect } from "react";
//import React, { useContext } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Context } from "..";
import Pages from "../components/Pages";
import PeopleList from "../components/PeopleList";
import { fetchPeople } from "../http/peopleAPI";
//import { fetchPeople } from "../http/peopleAPI";
//import { useState } from "react";//
 //const Main = () => { ////oto
  // const Main = observe(() => { //
  //   const [people, setPeople] = useState({ info: [] }); //
    //const { id } = useParams();
  //const { people } = useContext(Context); ///oto

  // useEffect(() => {//bulo tse vse
  //   //
  //   fetchPeople().then((data) => setPeople(data)); //
  // }, []); //
  // //});

  const Main = () => {
    const {people} = useContext(Context)        

useEffect( () => {
    fetchPeople(1, 4).then(data => {
      people.setPeoples(data.rows)
      people.setTotalCount(data.count)
    })
}
)

useEffect(() => {
  fetchPeople(people.page, 4).then(data => {
    people.setPeoples(data.rows)
    people.setTotalCount(data.count)
  })
}, [people.page])

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
  //);

export default Main;
