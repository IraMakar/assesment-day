import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const PeoplePage = () => {
    const people = {id: 1, name: "ппп", surname: "впарпор", description: "вапро", sum_mark: 5, img: `https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg`}

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} heght={300} src={people.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center"> 
                        <h2>{people.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:275, height:270, backgroundSize: 'cover', fontSize:64}}
                        >
                            {people.sum_mark}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <h3>{people.description}</h3>
                    <Button variant={"outline-dark"}>Поставити плюсик</Button>
                </Col>
            </Row>
            
        </Container>
    );
};

export default PeoplePage;