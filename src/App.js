import React from 'react'

import {
    Route,
    Routes
} from 'react-router-dom'

import Auth from './app/providers/Auth'
import Layout from './app/providers/Layout'

import RequireAuth from './app/middlewares/RequireAuth'

import Home from './app/components/pages/Home'
import Login from './app/components/pages/Auth/Login'
import Dashboard from './app/components/pages/Admin/Dashboard'
import Isps from './app/components/pages/Admin/Isps'



export default function App () {
    return (
        <Auth>

            <Routes>
                <Route element={ <Layout/> } >
                    <Route path='/' element={ <Home /> } />
                    <Route path='/login' element={ <Login /> } />
                    <Route path='/dashboard' element={ <RequireAuth> <Dashboard /> </RequireAuth> } />
                    <Route path='/provedores' element={ <RequireAuth> <Isps /> </RequireAuth> } />
                </Route>
            </Routes>

        </Auth>
    )
}
