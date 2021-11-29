import React from 'react';
import Main from '../pages/Main';
import Signin from '../pages/Signin';

import { MAIN_PAGE_ROUTE, SIGNIN_ROUTE } from '../config/consts';

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        component: <Main />,
        exact: true,
    },
    {
        path: SIGNIN_ROUTE,
        component: <Signin />,
        exact: true,
    }
];
