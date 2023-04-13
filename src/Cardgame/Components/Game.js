import React, { useState } from 'react'
import one from "../images/1.jpg"
import two from "../images/2.webp"
import three from "../images/3.webp"
import four from "../images/4.webp"
import five from "../images/5.png"
import six from "../images/6.avif"

function Game() {

  const data = [
    {
      image: one,
      id: 1
    },
    {
      image: two,
      id: 2
    },
    {
      image: three,
      id: 3
    },
    {
      image: four,
      id: 4
    },
    {
      image: five,
      id: 5
    },
    {
      image: six,
      id: 6
    },
    {
      image: one,
      id: 7
    },
    {
      image: two,
      id: 8
    },
    {
      image: three,
      id: 9
    },
    {
      image: four,
      id: 10
    },
    {
      image: five,
      id: 11
    },
    {
      image: six,
      id: 12
    }]

  const [flip, setFlip] = useState(null)

  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  function handleflip(index) {
    if (flip === null) {
      setFlip(index)

    }
    else {
      setFlip(null)
    }
  }

  console.log(flip)

  return (
    <>
      <div className='gamewrapper'>
        <div className='gamehead'>
          {
            data.map((element, index) => {
              return (
                <>
                  <div class="flip-card" key={index} onClick={() => { handleflip(index) }}>
                    <div class="flip-card-inner" style={{ transform: index === flip ? 'rotateY(180deg)' : 'none' }}>
                      <div class="flip-card-front">
                        <h1>Check Image</h1>
                      </div>
                      <div class="flip-card-back">
                        <img src={element.image} alt="Avatar"></img>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Game