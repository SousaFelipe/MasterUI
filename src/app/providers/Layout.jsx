import React from 'react'

import { Outlet } from 'react-router-dom'



function LayoutProvider () {
    return (
        <div className="layout">
            <div className="layout-content">
                <div className="layout-content-main">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}



export default LayoutProvider
