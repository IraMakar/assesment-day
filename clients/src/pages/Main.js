import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import PeopleList from '../components/PeopleList';

const Main = () => {
    return (
        <Container>
            <Row className="mt-10 ml-45">
                <Col md={3}>
                    <PeopleList/>
                </Col>
                <Col md={3}>
                    <PeopleList />
                </Col>
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