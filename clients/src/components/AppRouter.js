import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../index';
import { public2Routes } from '../routes';
import { MAIN_ROUTE } from '../utils/consts';

const AppRouter = () => {
    //const isAuth = true
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Switch>
            {(!user.isAuth) && public2Routes.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact/>
             )}
             <Redirect to={MAIN_ROUTE} />
        </Switch>
    );
};

export default AppRouter;