import React from 'react'
import Home from './Components/Home'
import Game from './Components/Game'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Cardgame() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path = '/game' element={<Game/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Cardgame