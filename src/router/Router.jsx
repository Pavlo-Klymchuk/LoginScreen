import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ClientWrapper from './ClientWrapper';
import { publicRoutes } from './routes';

const Router = () => (
    <Switch>
        {[...publicRoutes].map((route) => {
            return (
                <Route
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                >
                    <ClientWrapper>{route.component}</ClientWrapper>
                </Route>
            );
        })}
        <Redirect to='/' />
    </Switch>
);

export default Router;
