import React from 'react'
import {Container,TextWrapper,Text,ShadowImg,ShadowRight} from "./style"

import Shadows from "../../assets/img/Shadow.png"
import BodyHeader from "../BodyHeader"



const FeedbackCarousel=() => {
  return (
    <Container>
    <TextWrapper>
      <Text>Our customers say</Text>
     
    </TextWrapper>
     <BodyHeader/>
  <ShadowImg src={Shadows}/>
    <ShadowRight  src={Shadows}/>
   
    </Container>
  
  )
}

export default FeedbackCarousel
