import React, { useContext, useState } from 'react'

import { fakeAuth } from '../../services/auth'



const AuthContext = React.createContext()



export default function AuthProvider ({ children }) {
    const [user, setUser] = useState(null)


    let signin = (credentials) => {
        return fakeAuth(credentials)
            .attempt(newUser => setUser(newUser))
    }


    let signout = (currentUser) => {
        return fakeAuth(currentUser)
            .logout()
    }


    return (
        <AuthContext.Provider

            value={{
                user,
                signin,
                signout
            }}>

            { children }

        </AuthContext.Provider>
    )
}



export function useAuth () {
    const auth = useContext(AuthContext)

    return {
        user: auth.user ? auth.user : false,
        signin: auth.signin,
        signout: auth.signout
    }
}
