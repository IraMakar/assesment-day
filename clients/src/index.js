import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import PeopleStore from './store/PeopleStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    people: new PeopleStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

