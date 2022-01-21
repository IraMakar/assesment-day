import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export const Context = createContext();
console.log(process.env.REACT_APP_API_URL)


ReactDOM.render(
  <App context={Context} />,
  document.getElementById('root')
);

