import React, { useContext } from 'react';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import PeopleItem from './PeopleItem';

const PeopleList = () => {
    const {people} = useContext(Context)
    return (
        <Row className="d-flex">
            {people.peoples.map(people => 
                <PeopleItem key={people.id} people={people} />
            )}
        </Row>
    );
};

export default PeopleList;