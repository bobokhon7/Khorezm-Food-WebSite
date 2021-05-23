import React from 'react'
import {Container,TextWrapper,Text,ShadowImg} from "./style"

import Shadows from "../../assets/img/Shadow.png"
import BodyHeader from "../FeedbackCard"



const FeedbackCarousel=() => {
  return (
    <Container>
    <TextWrapper>
      <Text>Our customers say</Text>
     
    </TextWrapper>
     <BodyHeader/>
  <ShadowImg src={Shadows}/>
  <ShadowImg position src={Shadows}/>
    </Container>
  
  )
}

export default FeedbackCarousel
