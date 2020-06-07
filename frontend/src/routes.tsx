import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
//BrowserRouter. Geralmente usado em navegação no browser

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import SuccessPage from './pages/SuccessPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path='/create-point' />
            <Route component={SuccessPage} path='/success-page' />
        </BrowserRouter>
    )
};

export default Routes;