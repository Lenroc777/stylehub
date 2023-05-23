import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {mobile} from "../responsive"
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;

    ${mobile({
        padding: "10px"
    })}
`
const Tittle = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;

    border: ${props=>props.type === "filled" && "none" };
    background-color: ${props=>props.type === "filled" ? "black" : "transparent" };
    color: ${props=>props.type === "filled" && "white" };
`
const TopTexts = styled.div`
    ${mobile({
        display: "none"
    })}
`

const TopText = styled.span`
    margin: 0px 10px;
    text-decoration: underline;
    cursor: pointer;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: "column"
    })}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: "column"
    })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* nie działa ?? */
    /* background-color: aliceblue; */
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;

    ${mobile({
        margin: "5px 15px"
    })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

    ${mobile({
        marginBottom: "20px"
    })}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
    `
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type == "total" && "500"};
    font-size: ${props=>props.type == "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
    const cart = useSelector(state=>state.cart)

    const [stripeToken, setStripeToken] = useState(null);

    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest = async ()=>{
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                })
                navigate("/success", {data:res.data})
            } catch (error) {
                
            }
        }
        stripeToken && cart.total > 0 &&  makeRequest();
    }, [stripeToken, cart.total, navigate])

    console.log(stripeToken)

    

    return ( 
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Tittle>Your bag</Tittle>
                <Top>
                    <TopButton>Continue shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping bag(2)</TopText>
                        <TopText>Your watchlist</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products && cart.products.map(product=><Product>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><b>Product:</b> {product.title} </ProductName>
                                    <ProductId><b>ID:</b>{product._id}</ProductId>
                                    <ProductColor color={product.color}></ProductColor>
                                    <ProductSize><b>Size:</b>{product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>)}
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order summary:</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated shipping price</SummaryItemText>
                            <SummaryItemPrice>$ 5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem  type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total + 5} </SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Lama Shop"
                            image=""
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total*100}
                            stripeKey={KEY}
                            token={onToken}
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
     );
}
 
export default Cart;