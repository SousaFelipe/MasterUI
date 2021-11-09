import React, { useState } from 'react'

import style from './style'



export default function Button (props) {


    const [hover, setHover] = useState(false)


    return (
        <button
            type="button"
            style={ style.button(props.color, 'md', hover) }
            onClick={ (props.onClick ? props.onClick : null) }
            onMouseEnter={ () => setHover(true) }
            onMouseLeave={ () => setHover(false) }
            >

            { props.children }

        </button>
    )
}
