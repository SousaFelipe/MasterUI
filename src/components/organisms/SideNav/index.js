import React from 'react'

import List from './components/organisms/List'



function SideNav(props) {


    return (
        <>
            <List menu={ props.menu }/>
        </>
    )
}



export default SideNav
