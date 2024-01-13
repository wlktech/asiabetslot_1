import React from 'react'

const GameTitle = ({title}) => {
  return (
    <div className='px-2 px-sm-5 d-flex align-items-center '>
      <h1 className='gameTitle'>{title}</h1>
      <div className="gameTitleBar"></div>
    </div>
  )
}

export default GameTitle
