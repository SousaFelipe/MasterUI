import React from 'react'

import Item from '../../molecules/Item'

import style from './style'



export default function List (props) {


    const items = () => (
        props.items.map(item => (
            <Item
                key={ item.id }
                color='primary'
                >
                { item.content }
            </Item>
        ))
    )


    return (
        <ul style={ style }>
            { items() }
        </ul>
    )
}
