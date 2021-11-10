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
    console.log(history)
    return (
        <Container>
            <Col md={3} className={"mt-3 .ml-20 .pl-5"} onClick={() => history.push(PEOPLE_ROUTE + '/' + people.id)}>
                <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                    {/* <Image width={150} height={150} src={process.env.REACT_APP_API_URL + people.img} /> */}
                    <Image width={150} height={150} src={'http://localhost:5000/' + people.img} />
                    <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                        <div>fghjhhhhhhhhhhk</div>
                        <div className="d-flex align-items-center">
                            <div>{people.rating}</div>
                            <Image width={18} height={18} src={star}/>
                        </div>
                    </div>
                    <div>{people.name}</div>
                </Card>
            </Col>
        </Container>
    );
};

export default PeopleItem;