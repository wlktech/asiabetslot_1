import React from 'react'
import GameTitle from './GameTitle'
import fishg1 from '../../assets/img/games/fish1.png'
import fishg2 from '../../assets/img/games/fish2.png'
import fishg3 from '../../assets/img/games/fish3.png'
import fishg4 from '../../assets/img/games/fish4.png'
import fishg5 from '../../assets/img/games/fish5.png'
import fishg6 from '../../assets/img/games/fish6.png'
import fishg7 from '../../assets/img/games/fish7.png'
import fishg8 from '../../assets/img/games/fish8.png'
import fishg9 from '../../assets/img/games/fish9.png'
import fishg10 from '../../assets/img/games/fish10.png'
import slotg1 from '../../assets/img/games/slot1.png' 
import slotg2 from '../../assets/img/games/slot2.png' 
import slotg3 from '../../assets/img/games/slot3.png' 
import slotg4 from '../../assets/img/games/slot4.png' 
import slotg5 from '../../assets/img/games/slot5.png' 
import slotg6 from '../../assets/img/games/slot6.png' 
import slotg7 from '../../assets/img/games/slot7.png' 
import slotg8 from '../../assets/img/games/slot8.png' 
import slotg9 from '../../assets/img/games/slot9.png' 
import slotg10 from '../../assets/img/games/slot10.png' 
import tableg1 from '../../assets/img/games/table1.png'
import tableg2 from '../../assets/img/games/table2.png'
import tableg4 from '../../assets/img/games/table4.png'
import tableg5 from '../../assets/img/games/table5.png'
import tableg6 from '../../assets/img/games/table6.png'
import tableg7 from '../../assets/img/games/table7.png'
import tableg8 from '../../assets/img/games/table8.png'
import tableg9 from '../../assets/img/games/table9.png'
import tableg10 from '../../assets/img/games/table10.png'
import tableg11 from '../../assets/img/games/table11.png'
import tableg12 from '../../assets/img/games/table12.png'
import casinog1 from '../../assets/img/games/casino1.png'
import casinog2 from '../../assets/img/games/casino2.png'
import casinog3 from '../../assets/img/games/casino3.png'
import casinog4 from '../../assets/img/games/casino4.png'
import casinog5 from '../../assets/img/games/casino5.png'
import casinog6 from '../../assets/img/games/casino6.png'
import newg1 from '../../assets/img/games/new1.png'
import newg2 from '../../assets/img/games/new2.png'
import newg3 from '../../assets/img/games/new3.png'
import newg4 from '../../assets/img/games/new4.png'
import newg5 from '../../assets/img/games/new5.png'
import newg6 from '../../assets/img/games/new6.png'
import newg8 from '../../assets/img/games/new8.png'
import arcadeg1 from '../../assets/img/games/arcade1.png'
import arcadeg2 from '../../assets/img/games/arcade2.png'
import arcadeg3 from '../../assets/img/games/arcade3.png'
import arcadeg4 from '../../assets/img/games/arcade4.png'
import arcadeg5 from '../../assets/img/games/arcade5.png'
import arcadeg6 from '../../assets/img/games/arcade6.png'
import arcadeg8 from '../../assets/img/games/arcade8.png'

const fishGames=[
    {img:fishg1,title:'Game'},
    {img:fishg2,title:'Game'},
    {img:fishg3,title:'Game'},
    {img:fishg4,title:'Game'},
    {img:fishg5,title:'Game'},
    {img:fishg6,title:'Game'},
    {img:fishg7,title:'Game'},
    {img:fishg8,title:'Game'},
    {img:fishg9,title:'Game'},
    {img:fishg10,title:'Game'},
];
const slotGames=[
    {img:slotg1,title:'Slot Game'},
    {img:slotg2,title:'Slot Game'},
    {img:slotg3,title:'Slot Game'},
    {img:slotg4,title:'Slot Game'},
    {img:slotg5,title:'Slot Game'},
    {img:slotg6,title:'Slot Game'},
    {img:slotg7,title:'Slot Game'},
    {img:slotg8,title:'Slot Game'},
    {img:slotg9,title:'Slot Game'},
    {img:slotg10,title:'Slot Game'}
]
const tableGames=[
    {img:tableg1,title:'Table'},
    {img:tableg2,title:'Table'},
    {img:tableg4,title:'Table'},
    {img:tableg5,title:'Table'},
    {img:tableg6,title:'Table'},
    {img:tableg7,title:'Table'},
    {img:tableg8,title:'Table'},
    {img:tableg9,title:'Table'},
    {img:tableg10,title:'Table'},
    {img:tableg11,title:'Table'},
    {img:tableg12,title:'Table'},

]
const liveGames=[
    {img:casinog1,title:"Game"},
    {img:casinog2,title:"Game"},
    {img:casinog3,title:"Game"},
    {img:casinog4,title:"Game"},
    {img:casinog5,title:"Game"},
    {img:casinog6,title:"Game"},

]
const newGames=[
    {img:newg1,title:'New Game'},
    {img:newg2,title:'New Game'},
    {img:newg3,title:'New Game'},
    {img:newg4,title:'New Game'},
    {img:newg5,title:'New Game'},
    {img:newg6,title:'New Game'},
    {img:newg8,title:'New Game'},

]
const arcadeGames=[
    {img:arcadeg1,title:'Arcade Game'},
    {img:arcadeg2,title:'Arcade Game'},
    {img:arcadeg3,title:'Arcade Game'},
    {img:arcadeg4,title:'Arcade Game'},
    {img:arcadeg5,title:'Arcade Game'},
    {img:arcadeg6,title:'Arcade Game'},
    {img:arcadeg8,title:'Arcade Game'},

]

const HomePageGames = () => {
    
  return (
    <div >
      <GameTitle title={'Popular Fishing Games'} />
      <div className="my-4 gamesGrid px-4 ">
        {fishGames.map((game)=>{
            return <div className='game'>
                <img src={game.img} />
                <p>{game.title}</p>
            </div>
        })}
      </div>
      <GameTitle title={'Popular Slot Games'} />
      <div className="my-4 gamesGrid px-4 ">
        {slotGames.map((game)=>{
            return <div className='game'>
                <img src={game.img} />
                <p>{game.title}</p>
            </div>
        })}
      </div>
      <GameTitle title={'Table Games'} />
      <div className="my-4 gamesGrid px-2 px-sm-4 ">
        {tableGames.map((game)=>{
            return <div className='game'>
                <img src={game.img} />
                <p>{game.title}</p>
            </div>
        })}
      </div>
      <GameTitle title={'Popular Live Casino'} />
      <div className="my-4 gamesGrid px-2 px-sm-4 ">
        {liveGames.map((game)=>{
            return <div className='game'>
                <img src={game.img} />
                <p>{game.title}</p>
            </div>
        })}
      </div>
      <GameTitle title={'New Games'} />
      <div className="my-4 gamesGrid px-2 px-sm-4 ">
        {newGames.map((game)=>{
            return <div className='game'>
                <img src={game.img} />
                <p>{game.title}</p>
            </div>
        })}
      </div>
      <GameTitle title={'Popular Arcade Games'} />
      <div className="my-4 gamesGrid px-2 px-sm-4 ">
        {arcadeGames.map((game)=>{
            return <div className='game'>
                <img src={game.img} />
                <p>{game.title}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default HomePageGames
