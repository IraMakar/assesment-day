import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';
//import { fetchPeople } from "../http/peopleAPI";
import React, { useContext, useEffect } from "react";
import { Context } from '.';
import { fetchPeople } from './http/peopleAPI';
//import { Context } from "..";


const App = () => {
  const { people } = useContext(Context);


  useEffect(() => {
    fetchPeople().then((data) => people.setPeoples(data.rows));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;