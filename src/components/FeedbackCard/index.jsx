import React from 'react'
import {Container,TextWrapper,NameWrapper,ImgWrapper} from "./style"
import {mockData} from "../../mock/mockData"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StarOutlined } from "@ant-design/icons";

const responsive = {
  superLargeDesktop: {
  
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
    
      <Carousel  
      additionalTransfrom={0}
    autoPlay
    autoPlaySpeed={2500}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside={false} 
      responsive={responsive}>
        {mockData.map((value) =>{
          return(
            
            <Container key={value.id}  >
            <NameWrapper>
              {value.name}
            </NameWrapper>
            <TextWrapper>
              {value.title} 
            </TextWrapper>
            <ImgWrapper src={value.img}/>
            <span
                style={{
                  fontSize: "20px",
                  color: "orange  ",
                  marginLeft: "10px",
                  textAlign:"center"
                }}
              >
                <StarOutlined />  <StarOutlined />  <StarOutlined />  <StarOutlined />  <StarOutlined />
              </span>
          </Container>
        
          )
        })} 
  </Carousel>   

  )
}

export default BodyHeader
