import React, { useState } from 'react'

import Text from '../../atoms/Text'

import style from './style'



export default function Item (props) {


    const [hover, setHover] = useState(false)


    const active = (strict = false) => (
        strict
            ? window.location.pathname === props.path
            : hover || window.location.pathname === props.path
    )


    const background = () => (
        active(true)
            ? props.activeBackground
            : props.background
    )


    const foreground = () => (
        active()
            ? props.activeForeground
            : props.foreground
    )


    const renderIcon = () => (
        props.icon
            ?  <i className="material-icons" style={{ marginRight: 10 }}>{ props.icon }</i>
            : <></>
    )


    return (
        <li
            style={ style.item( background() ) }
            onMouseEnter={ () => setHover(true) }
            onMouseLeave={ () => setHover(false) }>

            { renderIcon() }

            <Text color={ foreground() }>
                { props.children }
            </Text>

        </li>
    )
}
