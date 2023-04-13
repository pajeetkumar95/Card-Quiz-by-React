import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    
    const navigate = useNavigate()

    function handleclick(e){
        e.preventDefault()
        navigate('/game')
        alert('Welcome in this quiz')
    }

    return (
        <div>
            <>
                <div className='wrapper'>
                    <div className='wrapperhead'>
                        <h1>You are check your memory by this game.....</h1><br />
                        <button type='submit' onClick={handleclick}>Start Game</button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Home