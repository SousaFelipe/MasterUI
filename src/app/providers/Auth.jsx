import React, { useEffect, useState } from 'react'

import {
    getToken,
    storeToken,
    destroyToken,
    validateAuthorization
} from '../../services/auth'

import api from '../../services/api'
import history from '../../services/history'



const AuthContext = React.createContext()



export default function AuthProvider ({ children }) {


    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)


    useEffect (() => {
        if (getToken()) {
            api.post('/auth')
                .then(async response => {

                    const data = await response.data
                    const config = await response.config

                    if (validateAuthorization(config.headers.Authorization) && data.user) {

                        setUser(data.user)
                        setAuth(true)

                        history.push('/dashboard')
                    }
                })
        }
    }, [])


    const signin = async function (credentials) {
        const response = await api.post('/login', credentials)

        if ( ! response.data.errors) {
            storeToken(response.data.token)
            setUser(response.data.user)
            setAuth(true)
        }

        return response.data
    }


    const signout = async function () {
        if (getToken()) {
            const response = await api.post('/logout')

            if (response.data.revoked) {
                destroyToken()
                setUser(false)
                setAuth(false)
            }
        }
    }


    return (
        <AuthContext.Provider value={ { auth, user, signin, signout } }>
            { children }
        </AuthContext.Provider>
    )
}



export { AuthContext, AuthProvider }
