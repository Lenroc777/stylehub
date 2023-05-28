import styled from "styled-components"
import {mobile, laptop} from "../responsive"
import { Link } from "react-router-dom"
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;

    

    `
    const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({
        height: "20vh"
    })}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .25);

    &:hover{
        background: rgba(255, 255, 255, .05);
        transition: .5s
    }

`
const Title = styled.h1`
    color: white;    
    margin-bottom: 20px;
    font-size: 42px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
`

const CategoryItem = ({item}) => {
    return ( 
        <Container>
            <Link to={`/products/${item.cat}`}> 
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
     );
}
 

export default CategoryItem;
