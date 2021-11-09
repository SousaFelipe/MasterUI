import React from 'react'

import List from './components/organisms/List'
import SideNav from './components/organisms/SideNav'

import menu from './components/organisms/SideNav/menu'



function App() {


    return (
        <main style={{ width: '100vw', height: '100vh' }}>

            <SideNav
                theme='main'
                ul={
                    <List
                        background={{
                            default: 'none',
                            active: 'primary'
                        }}
                        foreground={{
                            default: 'secondary',
                            active: 'brand'
                        }}
                        items={ menu } />
                }/>

        </main>
    )
}



export default App
