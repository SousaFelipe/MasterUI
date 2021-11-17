import React from 'react'

import {
    Route,
    Routes
} from 'react-router-dom'

import AuthProvider from './app/providers/Auth'
import LayoutProvider from './app/providers/Layout'

import Auth from './app/middlewares/Auth'

import Home from './app/components/pages/Home'
import Login from './app/components/pages/Auth/Login'
import Dashboard from './app/components/pages/Admin/Dashboard'
import Isps from './app/components/pages/Admin/Isps'

import history from './services/history'



export default function App () {
    return (
        <AuthProvider>

            <Routes>
                <Route history={ history } element={ <LayoutProvider/> } >
                    <Route path='/' element={ <Home /> } />
                    <Route path='/login' element={ <Login /> } />
                    <Route path='/dashboard' element={ <Auth> <Dashboard /> </Auth> } />
                    <Route path='/provedores' element={ <Auth> <Isps /> </Auth> } />
                </Route>
            </Routes>

        </AuthProvider>
    )
}
