import React from 'react';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { useHistory } from 'react-router';
import { PEOPLE_ROUTE } from '../utils/consts';

const PeopleItem = ({people}) => {
    const history = useHistory()
    return (
            <Col md={4} xl={5} className={"mt-5"} onClick={() => history.push(PEOPLE_ROUTE + '/' + people.id)}>
                <Card style={{ cursor: 'pointer', width: "16rem" }} border={"light"}>
                    <Card.Img variant="top" style={{ width: "16rem", height: "16rem" }} src={`${process.env.REACT_APP_SERVER_URL}/${people.img}`} />
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
    );
};

export default PeopleItem;