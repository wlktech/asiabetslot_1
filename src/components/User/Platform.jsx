import React from 'react'
import chrome from '../../assets/img/chrome.png'
import safari from '../../assets/img/safari.png'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import p1 from '../../assets/img/p1.png'  
import p2 from '../../assets/img/p2.png'  
import p3 from '../../assets/img/p3.png'  
import p4 from '../../assets/img/p4.png'  
import p5 from '../../assets/img/p5.png'  
import p6 from '../../assets/img/p6.png'  
import p7 from '../../assets/img/p7.png'  
import p8 from '../../assets/img/p8.png'  
import p9 from '../../assets/img/p9.png'  
import p10 from '../../assets/img/p10.png'  
import p11 from '../../assets/img/p11.png'  
import p12 from '../../assets/img/p12.png'  
import p13 from '../../assets/img/p13.png'  
import p14 from '../../assets/img/p14.png'  
import p15 from '../../assets/img/p15.png'  
import p16 from '../../assets/img/p16.png'  

const Platform = () => {
    const platform=[
        {img:chrome,title:'Google Chrome'},
        {img:safari,title:'Safari'},
    ];
    const carousel1=[p1,p2,p3,p4,p5,p6,p7,p8];
    const carousel2=[p9,p10,p11,p12,p13,p14,p15,p16];
  return (
    <div>
         <div class='container-fluid' >            
        <OwlCarousel items={3}  
          className="owl-theme"
          loop  
          autoplayTimeout={900}
          autoplay ={true}
          margin={8} >  
           {carousel1.map((item)=>{
            return <div ><img  className="owlImg" src= {item}/></div>
           })}  
      </OwlCarousel>  
      </div> 
      <div class='container-fluid' >            
        <OwlCarousel items={3}  
          className="owl-theme"
          loop  
          autoplayTimeout={900}
          autoplay ={true}
          margin={8} >  
           {carousel2.map((item)=>{
            return <div ><img  className="owlImg" src= {item}/></div>
           })}  
      </OwlCarousel>  
      </div> 
        <div className='platform '>
        <span style={{marginBottom:'6px'}}>Our platform is most compatible with: </span><br/>
        {platform.map((item)=>{
            return <>
                <img className='platformIcon' src={item.img} />
                <span>{item.title}</span>
            </>
        })}
        <div className='policy'>
            Responsible Gaming Policy. 21+ Responsible Gaming 
        </div>
        </div>
    </div>
  )
}

export default Platform
