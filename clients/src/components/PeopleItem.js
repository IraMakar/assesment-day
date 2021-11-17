import React from 'react';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { PEOPLE_ROUTE } from '../utils/consts';

const PeopleItem = ({people}) => {
    const history = useHistory()
    return (
        <Container >
            <Col md={5} className={"mt-5"} onClick={() => history.push(PEOPLE_ROUTE + '/' + people.id)}>
                {console.log('people', people.img)}
                <Card style={{width: 250, cursor: 'pointer'}} border={"light"}>
                    <Image width={250} height={250} src={'http://localhost:5000/' + people.img} />
                    <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                        <div>{people.description}</div> 
                        <div className="d-flex align-items-center">
                            <div>{people.sum_mark}</div>
                            <Image width={22} height={22} src={star}/>
                        </div>
                    </div>
                    <div>{people.name} {people.surname}</div>
                </Card>
            </Col>
        </Container>
    );
};

export default PeopleItem;