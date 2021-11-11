import React from 'react'

import {
    Route,
    Navigate,
    Routes as Switch
} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Dashboard'
import Isps from './pages/Isps'



function Routes ({ auth }) {
    return (
        <Switch>
            <Route exact    path='/'            element={ <Home /> }        />
            <Route exact    path='/login'       element={ <Login /> }       />
            <Route exact    path='/register'    element={ <Register /> }    />
            <PrivateRoute   path='/dashboard'   element={ <Dashboard/> }    />
            <PrivateRoute   path='/provedores'  element={ <Isps/> }         />
        </Switch>
    )
}



export default Routes
