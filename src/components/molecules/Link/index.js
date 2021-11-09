import React, { useState } from 'react'

import style from './style'

import Text from '../../atoms/Text'



export default function Link (props) {


    const [hover, setHover] = useState(false)


    return (
        <a
            href={ props.to }
            style={ style.link(props.color, props.size, hover) }
            onMouseEnter={ () => setHover(true) }
            onMouseLeave={ () => setHover(false) }
            >
            <Text color={ props.color } size={ props.size } hover={true}>{ props.children }</Text>
        </a>
    )
}
