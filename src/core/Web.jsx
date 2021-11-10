import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Isps from '../pages/Isps'



export default function Web (props) {
    return (
        <Routes>
            <Route path='/' element={ <Dashboard/> } />
            <Route path='/isps' element={ <Isps/> } />
        </Routes>
    )
}
