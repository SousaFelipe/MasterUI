import React from 'react'

import style from './style'



function SideNav(props) {


    return (
        <nav style={ style.nav(props.theme) }  >

            { props.ul }

        </nav>
    )
}



export default SideNav
