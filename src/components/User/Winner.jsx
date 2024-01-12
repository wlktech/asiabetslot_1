import React from 'react'
import winner from '../../assets/img/winner.png'
const Winner = () => {
  return (
    <div className='winnerContainer'>
      <div className="winner">
        <img  src={winner} />
        <div>
            <div className="winnerBadge">Winner</div>
            <div className='winnerText'>
                <p>m9m2343kj</p>
                <p>+1,845,999</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Winner
