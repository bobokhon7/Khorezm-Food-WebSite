import React from 'react'
import {Container,TextWrapper,Text, Button} from "./style"
// import imgArrow from "../../assets/img/leftArrow.png"
import BodyHeader from "../BodyHeader"


const FeedbackCarousel=() => {
  return (
    <Container>
    <TextWrapper>
      <Text>Our customers say</Text>
      <Button>Next </Button>
    </TextWrapper>
     <BodyHeader/>
    
    </Container>
  
  )
}

export default FeedbackCarousel
