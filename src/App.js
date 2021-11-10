import React from 'react'

import {
    BrowserRouter,
    Routes
} from 'react-router-dom'

import WebRoutes from './WebRoutes'

import Sidebar from './components/organisms/Sidebar'

import { isAuthenticated } from './services/auth'



function App() {
    return (
        <BrowserRouter>
            <Routes render={ (props) => (
                <div className="layout">

                    {(props) => (
                        isAuthenticated() ? <Sidebar { ...props }/> : <></>
                    )}

                    <div className="layout-content">
                        <div className="layout-content-main">

                            <WebRoutes />

                        </div>
                    </div>

                </div>
            )}/>
        </BrowserRouter>
    )
}



export default App
