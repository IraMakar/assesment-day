import React from 'react';
import { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import {Button, Container} from 'react-bootstrap';
 
//import { Container } from 'react-dom';
//import { Container } from 'react-dom';


const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container> 
            <NavLink style={{color:'white'}} to={MAIN_ROUTE}>Bank Team</NavLink>
                <Nav className='.ml-1' style={{color:'white'}}>
                    <Button variant={"outline-light"}>Додати учасника</Button>
                    <Button variant={"outline-light"} className='ml-2' >Видалити учасника</Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;