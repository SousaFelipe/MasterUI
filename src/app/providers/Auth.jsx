import React, { useContext, useState } from 'react'

import { fakeAuth } from '../../services/auth'



const AuthContext = React.createContext()



export default function AuthProvider ({ children }) {
    const [user, setUser] = useState(null)


    let signin = (credentials, callback) => {
        fakeAuth(credentials)
            .signin(newUser => {
                setUser(newUser)
                callback()
            })
    }


    let signout = (currentUser, callback) => {
        fakeAuth(currentUser)
            .signout(() => {
                callback()
            })
    }


    return (
        <AuthContext.Provider
            value={{
                user: user,
                signin: signin,
                signout: signout
            }}>

            { children }

        </AuthContext.Provider>
    )
}



export function useAuth () {
    const { user, signin, signout } = useContext(AuthContext)

    return {
        user,
        signin,
        signout
    }
}
