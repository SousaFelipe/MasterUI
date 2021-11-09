import React from 'react'

import Text from '../../atoms/Text'

import style from './style'



export default function Item (props) {


    const state = (path) => (
        window.location.pathname == path
    )


    return (
        <li style={ style.item(state(), props.color) }
            >
            <Text>{ props.children }</Text>
        </li>
    )
}
