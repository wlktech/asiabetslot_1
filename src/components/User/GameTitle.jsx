import React from 'react'

const GameTitle = ({title}) => {
  return (
    <div className=' px-3 px-md-5 d-flex flex-wrap align-items-center '>
      <h1 className='gameTitle'>{title}</h1>
      <div className="gameTitleBar"></div>
    </div>
  )
}

export default GameTitle
