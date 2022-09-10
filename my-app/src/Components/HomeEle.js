/* import React from 'react'
import { Player } from 'video-react';
import Video from '../../ videos/video.mp4';
import HomeEleContainer from './HomeSty'
import  HomBg  from './HomeSty';
import VideoBg from './HomeSty';
import HomeBtnWrapper from './HomeSty';
import ArrowForward from './HomeSty';
import HomeContent from './HomeSty';
import HomeH1 from './HomeSty';
import HomeP from './HomeSty';
import ArrowRight  from './HomeSty';



const HomeEle = () => {
  const [hover ,setHover]= useState(false)

  const onHover =()=>{
    setHover =()=>{
        setHover(!hover)
    }
  }



  return (
    <HomeEleContainer  id='home'>
    <HomBg>
    <VideoBg autoPlay loop src= 'https://www.youtube.com/watch?v=Nl54MJDR2p8' type='video /mp4' />
    </HomBg>
    <HomeContent>

    <HomeH1> Corporate Event Solutions </HomeH1>
    </HomeContent>
    <HomeP>
          Corporate Event Solutions
           Transform your in-person, virtual or hybrid event into an 
           experience your audience will never forget. Create events that 
           inspire participants to support your mission and commit to 
           purpose-driven action. Sing up for a new a count today receive $200 of 
    </HomeP>
    <HomeBtnWrapper>
  
    
    <Button to='signup' onMouseEnter={onHover}
                        onMouseLeave={onHover} 
                        primary ='true'
                        dark ='true'
                        >
    Get started {hover ? <ArrowForward /> :<ArrowRight /> }
    
    
    </ Button> 

    
    
    </HomeBtnWrapper>
   
   
   </HomeEleContainer>
    
      
    
  )
}

export default HomeEle; */
