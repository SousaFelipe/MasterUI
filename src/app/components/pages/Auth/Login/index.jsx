import React, { useContext, useState } from 'react'

import { AuthContext } from '../../../../providers/Auth'

import history from '../../../../../services/history'



export default function Login (props) {
    const { signin } = useContext(AuthContext)


    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')


    const handleLogin = async function () {

        let response = await signin({
            email: email,
            password: passw
        })

        if (response.errors) {
            handleError(response.errors)
        }
        else {
            history.push('/dashboard')
        }
    }


    const handleError = function (errors) {
        if (errors.crash) {
            alert(`500: ${ errors.crash }`)
        }
        else if (errors.email) {
            alert(`Email: ${ errors.email }`)
        }
        else if (errors.password) {
            alert(`Senha: ${ errors.password }`)
        }
    }


    return (
        <>
            <input type="email" value={ email } onChange={ e => setEmail(e.target.value) } />
            <input type="password" value={ passw } onChange={ e => setPassw(e.target.value) } />
            <input type="button" value="Entrar" onClick={ handleLogin }/>
        </>
    )
}
