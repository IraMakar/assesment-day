import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { MAIN_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
import AddedPeople from '../components/modals/AddedPeople';
import { createPeople } from '../http/peopleAPI';


//const Admin = () => {
const Admin = ({show, onHide}) => { //
    const history = useHistory()

    const [peopleVisible, setPeopleVisible] = useState(false)
    
    const [name, setName] = useState(''); //
    const [lastName, setLastName] = useState(''); //
    const [description, setDescription] = useState(''); //
    const [file, setFile] = useState(null); //
    const [info, setInfo] = useState([]); //

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addPeople = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('surname', lastName)
        formData.append('description', description)
        formData.append('img', file)
        formData.append('info', JSON.stringify(info))
        createPeople(formData).then(data => setPeopleVisible(true))
    };

    const onAdd = () => {
        setPeopleVisible(false);
        history.replace('/main');
    };


    return (


        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 630}} className="p-5">
                <h2 className="m-auto">Додати чувачка</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введіть ім'я чувачка..."
                    />
                    <Form.Control
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        className="mt-3"
                        placeholder="Введіть прізвище чувачка..."
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введіть опис чувачка..."
                    />
                    <Form.Control
                        className="mt-3"
                        type = "file"
                        onChange={selectFile}
                    />
                    <Row className="d-flex justify-content-center mt-3 pl-3 pr-3">
                        {/* <Button variant={"outline-success"} onClick={() => setPeopleVisible(true)} 
                        > */}
                        <Button variant={"outline-success"} onClick={addPeople} 
                        >
                            Додати нового
        
                        </Button> 
                        <Button variant={"outline-dark"} className="d-flex justify-content-center mt-3 pl-1 pr-1">
                        <div>
                            <NavLink style={{color:'black'}} to={MAIN_ROUTE} > А усьо, а в мене вже пропало бажання додавати нового чувачка( </NavLink>
                        </div>
                        </Button>
                        <AddedPeople show={peopleVisible} onHide={onAdd}/>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Admin;