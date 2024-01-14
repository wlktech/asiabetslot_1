import React, { useState } from 'react'
import hot from '../../../assets/img/gameTabs/hot.png'
import slot from '../../../assets/img/gameTabs/slot.png'
import casino from '../../../assets/img/gameTabs/casino.png'
import fish from '../../../assets/img/gameTabs/fish.png'
import sport from '../../../assets/img/gameTabs/sport.png'
import hotg1 from '../../../assets/img/hot/g1.png'
import hotg2 from '../../../assets/img/hot/g2.png'
import hotg3 from '../../../assets/img/hot/g3.png'
import hotg4 from '../../../assets/img/hot/g4.png'
import hotg5 from '../../../assets/img/hot/g5.png'
import hotg6 from '../../../assets/img/hot/g6.png'
import hotg7 from '../../../assets/img/hot/g7.png'
import hotg8 from '../../../assets/img/hot/g8.png'
import slotg1 from '../../../assets/img/slot/g1.png'
import slotg2 from '../../../assets/img/slot/g2.png'
import slotg3 from '../../../assets/img/slot/g3.png'
import slotg4 from '../../../assets/img/slot/g4.png'
import slotg5 from '../../../assets/img/slot/g5.png'
import slotg6 from '../../../assets/img/slot/g6.png'
import slotg7 from '../../../assets/img/slot/g7.png'
import slotg8 from '../../../assets/img/slot/g8.png'
import slotg9 from '../../../assets/img/slot/g9.png'
import casinog1 from '../../../assets/img/casino/g1.png'
import casinog2 from '../../../assets/img/casino/g2.png'
import casinog3 from '../../../assets/img/casino/g3.png'
import casinog4 from '../../../assets/img/casino/g4.png'
import casinog5 from '../../../assets/img/casino/g5.png'
import casinog6 from '../../../assets/img/casino/g6.png'
import casinog7 from '../../../assets/img/casino/g7.png'
import casinog8 from '../../../assets/img/casino/g8.png'
import fishg1 from '../../../assets/img/fish/g1.png'
import fishg2 from '../../../assets/img/fish/g2.png'
import fishg3 from '../../../assets/img/fish/g3.png'
import fishg4 from '../../../assets/img/fish/g4.png'
import fishg5 from '../../../assets/img/fish/g5.png'
import fishg6 from '../../../assets/img/fish/g6.png'
import sportg1 from '../../../assets/img/sport/g1.png'
import sportg2 from '../../../assets/img/sport/g2.png'
import sportg3 from '../../../assets/img/sport/g3.png'

const hots=[hotg1,hotg2,hotg3,hotg4,hotg5,hotg6,hotg7,hotg8];
const slots=[slotg1,slotg2,slotg3,slotg4,slotg5,slotg6,slotg7,slotg8,slotg9];
const casinos=[casinog1,casinog2,casinog3,casinog4,casinog5,casinog6,casinog7,casinog8];
const fishs=[fishg1,fishg2,fishg3,fishg4,fishg5,fishg6];
const sports=[sportg1,sportg2,sportg3];

const HomeHeroGames = () => {
    const [activeGameTab,setActiveGameTab]=useState('Hot');
    const [activeGameData,setActiveGameData]=useState(hots);
    const handleGameTab=(title)=>{
      setActiveGameTab(title);
      setActiveGameData(
        title === 'Hot' ? hots :
        title==='Slot' ? slots :
        title=== 'Casino' ? casinos :
        title === 'Fish' ? fishs :
        title==='Sport' ? sports : []
      )
    }
    const tabs=[
        {img:hot,title:'Hot'},
        {img:slot,title:'Slot'},
        {img:casino,title:'Casino'},
        {img:fish,title:'Fish'},
        {img:sport,title:'Sport'},
    ];
  
  return (
    <div>
      <div className='mx-5 py-4 homeGamesContainer'>
      <h1>1,942,245.28</h1>
      <div className="tabs">
        {tabs.map((tab)=>{
            return <div onClick={()=>handleGameTab(tab.title)} className={`tab ${activeGameTab===tab.title ? 'activeGameTab' : ''} `}>
                <img src={tab.img} />
                <span>{tab.title}</span>
            </div>
        })}
      </div>
    </div>
    <div className=' mx-md-5 py-4'>
      <div className="mb-6 mx-4 mx-md-0  gamesGrid">
      {activeGameData.map((game)=>{
        return <div className='game'>
          <img src={game} />
        </div>
      })}
      </div>
    </div>
    </div>
  )
}

export default HomeHeroGames
