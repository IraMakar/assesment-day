import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import { ADMIN_ROUTE } from '../utils/consts';
import {Button, Container} from 'react-bootstrap';
import { useState } from 'react';
import DeletePeople from './modals/DeletePeople';
import ResetAllThePluses from './modals/ResetAllThePluses';
import { useLocation } from 'react-router';

const NavBar = () => {
    const [peopleVisible, setPeopleVisible] = useState(false)
    const [peopleVisibleO, setPeopleVisibleO] = useState(false)
    const location = useLocation()
    const isAdd = location.pathname === MAIN_ROUTE
    const isAdd1 = location.pathname === ADMIN_ROUTE
    console.log(location)

    return (
        <Navbar bg="dark" variant="dark">
            <Container> 
            <NavLink style={{color:'grey'}} to={MAIN_ROUTE}>Bank Team</NavLink>
                <Nav className='.ml-1' style={{color:'white'}}>
                {isAdd ? 
                <Button variant={"outline-light" } 
                > <NavLink style={{color:'grey'}} to={ADMIN_ROUTE}>{isAdd ? 'Додати чувачка' : '' }</NavLink>
                </Button> 
:
                    <Button variant="link"> 
                    </Button>      
                 }


{isAdd ? 
                <Button variant={"outline-light"} className="ml-5" 
                onClick={() => setPeopleVisible(true)} 
                style={{color:'grey'} }
                > 
                {isAdd ? 'Обнулити всіх' : ''   } 
                </Button> 
:
                    <Button variant="link"> 
                    </Button>      
                 }

                 
                    {isAdd ? 
                  
                    <Button variant="link"> 
                    </Button>
:  isAdd1 ? 
<Button variant="link"> 
                     </Button>
                     :
<Button variant={"outline-light"} className="ml-5" 
                    onClick={() => setPeopleVisibleO(true)} 
                    style={{color:'grey'} }
                    > 
                    {isAdd ?  '' : 'Видалити учасника'  } 
                    </Button>   }
                    <DeletePeople show={peopleVisibleO} onHide={() => setPeopleVisibleO(false)}/>
                    <ResetAllThePluses show={peopleVisible} onHide={() => setPeopleVisible(false)}/>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;