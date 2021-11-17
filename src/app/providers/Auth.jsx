import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import {
    getToken,
    storeToken,
    destroyToken
} from '../../services/auth'



const AuthContext = React.createContext()



export default function AuthProvider ({ children }) {


    const [user, setUser] = useState(null)


    useEffect (() => {

        (async function () {
            const token = getToken()

            if (token) {
                let response = await api.get('/auth', {
                    headers: { 'Authorization': `Bearer ${ token }` }
                })

                if (response.user) {
                    setUser(response.user)
                }
            }
        })()

    }, [])


    const signIn = async function (credentials) {
        let response = await api.post('/auth', credentials)

        if (response.token) {
            api.defaults.headers.Authorization = `Bearer ${ response.token }`
            storeToken(response.token)
        }

        return response
    }


    const signOut = async function (user) {

    }


    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}



export { AuthContext, AuthProvider }
