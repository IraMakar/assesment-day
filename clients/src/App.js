import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';

const App = ({ context: Context }) => {
  const [people, setPeople] = useState({ peoples: [], page: 1, totalCount: 0, limit: 4 });
  const [user, setUser] = useState({ isAuth: false, user: {} });

  const peopleStoreMethods = {
    setPeoples: data => {
      console.log('data', data);
      setPeople((prev) => ({ ...prev, peoples: data }));
    },
    setPage: page => setPeople((prev) => ({ ...prev, page })),
    setTotalCount: totalCount => setPeople((prev) => ({ ...prev, totalCount })),
  };

  const userStoreMethods = {
    setIsAuth: isAuth => setUser((prev) => ({ ...prev, isAuth })),
    setUser: user => setUser((prev) => ({ ...prev, user })),
  };

  return (
    <Context.Provider
      value={{
        user: { isAuth: user.isAuth, user: user.user, ...userStoreMethods },
        people: {
          peoples: people.peoples,
          page: people.page,
          totalCount: people.totalCount,
          limit: people.limit,
          ...peopleStoreMethods,
        },
      }}
    >
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;