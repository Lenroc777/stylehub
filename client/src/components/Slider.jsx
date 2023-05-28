import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import { sliderItems } from '../data';
import {mobile, tablet} from '../responsive'
import { Link } from "react-router-dom";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

    ${mobile({
        display: "none" 
    })}
    ${tablet({
        height: "90vh",
        marginBottom: "60px",
    })}

`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    ${tablet({
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })}
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    ${tablet({
        display: "flex",
        justifyContent: "center"
    })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${tablet({
        position: "absolute",
        background: "rgba(255, 255, 255, .5)",
        maxWidth: "40vw"
    })}
`
const Image = styled.img`
    height: 80%;
    ${tablet({
        height: "100%",
        
    })}

`
const Title = styled.h1`
    font-size: 70px;

    ${tablet({
        fontSize: "50px"
    })}
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
        transition: .4s;
    }

    ${tablet({
        background: "rgba(0, 0, 0, 1)",
        color: "white",
    })}
    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length-1);
        }else{
            setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex +1 : 0);
        };
    }
    return ( 
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(

                <Slide key={item.id} bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.img}></Image>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Link to="/products">
                            <Button>Shop now</Button>
                        </Link>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightIcon/>
            </Arrow>
        </Container>
     );
}
 
export default Slider;