import React from 'react'
import {Container,TextWrapper,NameWrapper,ImgWrapper} from "./style"
import {mockData} from "../../mock/mockData"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const BodyHeader =() => {
  return (
    
      <Carousel  responsive={responsive}>
        {mockData.map((data,i) =>{
          return(
            
            <Container key={data.id}  >
            <TextWrapper>
              {data.title} 
            </TextWrapper>
            <NameWrapper>
              Name and Surname
            </NameWrapper>
            <ImgWrapper src={data.img}/>
          </Container>
        
          )
        })} 
  </Carousel>   

  )
}

export default BodyHeader
