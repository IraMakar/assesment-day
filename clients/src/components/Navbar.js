import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
import { ADMIN_ROUTE } from '../utils/consts';
import {Button, Container} from 'react-bootstrap';
import { useState } from 'react';
import DeletePeople from './modals/DeletePeople';
import ResetAllThePluses from './modals/Reset';
import { useLocation } from 'react-router';
import { updatePeople, fetchPeople } from '../http/peopleAPI';
import { Context } from "..";

const NavBar = () => {
		const { people } = useContext(Context);
    const [isOpenResetModal, setResetModalOpen] = useState(false)
    const [isOpenDeleteModal, setDeleteModalOpen] = useState(false)
    const location = useLocation()
    const isAdd = location.pathname === MAIN_ROUTE
    const isAdd1 = location.pathname === ADMIN_ROUTE

    const onReset = () => {
			updatePeople({ sum_mark: 0 })
				.then(() => {
					fetchPeople(people.page)
						.then((data) => {
							people.setPeoples(data.rows);
							setResetModalOpen(false);
						});
				});
    };

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
                onClick={() => setResetModalOpen(true)} 
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
                    onClick={() => setDeleteModalOpen(true)} 
                    style={{color:'grey'} }
                    > 
                    {isAdd ?  '' : 'Видалити учасника'  } 
                    </Button>   }
                    <DeletePeople
                      deletid={location.pathname.split("/")[2]}
                      show={isOpenDeleteModal}
                      onHide={() => setDeleteModalOpen(false)}
                    />
                    <ResetAllThePluses
                      show={isOpenResetModal}
                      onHide={() => setResetModalOpen(false)}
											onReset={onReset}
                    />
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;