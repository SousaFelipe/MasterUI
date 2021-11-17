import React, { useContext, useState } from 'react'

import { AuthContext } from '../../../../providers/Auth'



export default function Login (props) {
    const { signIn } = useContext(AuthContext)


    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')


    const handleLogin = async function () {

        setEmail('spark@spark.com')
        setPassw('tmncfldpt101')

        let response = await signIn({
            email: email,
            password: passw
        })

        console.log(response)
    }


    return (
        <>
            <input type="button" value="Entrar" onClick={ handleLogin }/>
        </>
    )
}
