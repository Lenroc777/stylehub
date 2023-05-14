import { Component, useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {mobile} from "../responsive"
import { useLocation } from "react-router";
import { LineAxisOutlined } from "@mui/icons-material";

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${mobile({
        flexDirection: "column",
        padding: "10px"
    })}
`
const ImgContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile({
        height: "40vh"
    })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    ${mobile({
        padding: "0px 10px"
    })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    ${mobile({
        width: "100%"
    })}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props=>props.color};
    border-radius: 50%;
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 10px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({
        width: "100%",
        // justifyContent: "space-around"
    })}

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Remove = styled.div``
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Add = styled.div``
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {

    const location = useLocation();
    const cat = (location.pathname.split("/")[2])
    // const [product, setProduct] = useState({})

    // useEffect(()=>{
    //     const getProduct = async () =>{

    //         try {
    //             const res = axios
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // }, [id])

    return ( 
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Sunshine hat</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, odio repudiandae dolorum atque nulla accusantium aperiam quidem possimus est, iste libero repellendus nesciunt dolore soluta! Blanditiis id voluptatem corporis dignissimos?</Desc>
                    <Price>$ 38.99</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                Color
                            </FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove>-</Remove>
                            <Amount>1</Amount>
                            <Add>+</Add>
                        </AmountContainer>
                        <Button>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
     );
}
 
export default Product;