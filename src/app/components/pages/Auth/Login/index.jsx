import React, { useEffect } from 'react'

import { useAuth } from '../../../../providers/Auth'



export default function Login (props) {


    const { signin } = useAuth()


    useEffect(() => signin({

        email: 'sousa.felipe@spark.com',
        password: 'marver1234'

    }), [])


    return (
        <span>Login</span>
    )
}
