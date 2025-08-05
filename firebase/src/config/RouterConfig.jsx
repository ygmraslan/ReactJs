import React from 'react'
import { Route, Routes } from "react-router";
import Home from '../pages/Home';
import Auth from '../pages/Auth';

function RouterConfig() {
    return (

        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/auth' element={<Auth />} />
        </Routes>

    )
}

export default RouterConfig