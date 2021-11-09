import React from 'react'

import Item from '../../molecules/Item'

import style from './style'



export default function List (props) {


    const items = () => (
        props.items.map(item => (
            <Item
                key={ item.id }
                path={ item.path }
                icon={ item.icon }
                background={ props.background.default }
                activeBackground={ props.background.active }
                foreground={ props.foreground.default }
                activeForeground={ props.foreground.active }>

                { item.title }

            </Item>
        ))
    )


    return (
        <ul style={ style }>
            { items() }
        </ul>
    )
}
