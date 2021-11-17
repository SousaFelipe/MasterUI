import React, { useContext } from 'react'

import {
    Navigate,
    useLocation
} from 'react-router-dom'

import { AuthContext } from '../providers/Auth'



export default function Auth ({ children }) {
    const { user } = useContext(AuthContext)


    const location = useLocation()


    return (
        user
            ? children
            : <Navigate to='/login' state={{ from: location }} />
    )
}
