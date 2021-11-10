import React from 'react'

import {
    Route,
    Routes,
    Navigate
} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Dashboard'
import Isps from './pages/Isps'

import { isAuthenticated } from './services/auth'



const PrivateRoute = function ({ element: Component, ...rest }) {
    return (
        <Route

            { ...rest }

            render={ props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
}



const WebRoutes = function () {
    return (
        <Routes>
            <Route          path='/'            element={ <Home /> }        />
            <Route          path='/login'       element={ <Login /> }       />
            <Route          path='/register'    element={ <Register /> }    />
            <PrivateRoute   path='/dashboard'   element={ <Dashboard/> }    />
            <PrivateRoute   path='/isps'        element={ <Isps/> }         />
        </Routes>
    )
}



export default WebRoutes
