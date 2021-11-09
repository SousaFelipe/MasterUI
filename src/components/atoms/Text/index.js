import React, { useState } from 'react'

import style from './style'



export default function Text (props) {


    const [hover, setHover] = useState(false)


    return (
        <span
            style={ style.text(props.color, props.size, hover) }
            onMouseEnter={ () => { props.hover ? setHover(true) : setHover(false) }}
            onMouseLeave={ () => { setHover(false) } }
            >
            { props.children }
        </span>
    )
}
