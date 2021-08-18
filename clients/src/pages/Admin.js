import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { MAIN_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';

const Admin = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 630}} className="p-5">
                <h2 className="m-auto">Додати чувачка</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ім'я чувачка..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть прізвище чувачка..."
                    />
                    <Row className="d-flex justify-content-center mt-3 pl-3 pr-3">
                        <Button 
                            variant={"outline-success"}
                        >
                            Додати чувачка
                        </Button>
                        <Button variant={"outline-dark"} className="d-flex justify-content-center mt-3 pl-3 pr-3">
                        <div>
                            <NavLink to={MAIN_ROUTE} > А усьо, а в мене вже пропало бажання додавати нового чувачка( </NavLink>
                        </div>
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Admin;