import React from 'react'

import {
    BrowserRouter,
    Routes
} from 'react-router-dom'

import Web from '../../../core/Web'
import Sidebar from '../../organisms/Sidebar'

import './style.css'



export default function Admin (props) {


    return (
        <BrowserRouter>
            <Routes render={(props) => (

                <div className="layout">

                    <Sidebar { ...props }/>

                    <div className="layout-content">
                        <div className="layout-content-main">
                            <Web />
                        </div>
                    </div>

                </div>

            )}/>
        </BrowserRouter>
    )
}
