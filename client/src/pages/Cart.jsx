import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {mobile, laptop} from "../responsive"
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from '../redux/cartRedux';

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

    &:hover{
        transform: scale(1.1);
        transition: .5s;
    }

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
        flexDirection: "column",
    })}
    ${laptop({
        flexDirection: "column",
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

    ${laptop({
        marginTop: "20px",
    })}

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
    cursor: pointer;
    &:disabled{
        background-color: grey;
        cursor: not-allowed;
    }

    &:hover{
        transform: scale(1.05);
        transition: .5s;
    }
`
const Error = styled.span`
    color: red;
`
const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };

const Cart = () => {
    const cart = useSelector(state=>state.cart)
    const user = useSelector(state=>state.user.currentUser);
    if(user) {
        const userToken = user.accessToken
    }
        const [stripeToken, setStripeToken] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }

    // console.log(cart)
    // console.log(user.accessToken)

    // useEffect(()=>{
    //     const makeRequest = async ()=>{
    //         try {

    //             const res = await userRequest.post("/checkout/payment", { 
    //                 tokenId: stripeToken.id,
    //                 amount: cart.total * 100,
    //             })


    //             if (stripeToken) {
    //                 const res = await userRequest.post("/orders", {
    //                   userId: user._id, // ID aktualnego użytkownika
    //                   products: cart.products.map(product => ({
    //                     productId: product._id,
    //                     quantity: product.quantity
    //                   })),
    //                   amount: cart.total,
    //                   address: "Adres dostawy", // Adres dostawy pobrany z formularza
    //                   status: "pending"
    //                 });
          
    //                 navigate("/success", {
    //                   state: {
    //                     stripeData: res.data,
    //                     products: cart,
    //                   },
    //                 });
    //               }
    //         } catch (error) {
                
    //         }
    //     }
    //     stripeToken && cart.total > 0 &&  makeRequest();
    // }, [stripeToken, cart.total, navigate])


    useEffect(() => {
        const makeRequest = async () => {
          try {
            const paymentRes = await userRequest.post("/checkout/payment", {
              tokenId: stripeToken.id,
              amount: cart.total * 100,
            });

            // const orderRes = await userRequest.post("/orders",
            // {
            //         userId: user._id, // ID aktualnego użytkownika
            //         products: cart.products.map(product => ({
            //           productId: product._id,
            //           quantity: product.quantity
            //         })),
            //         amount: cart.total,
            //         address: "Adres dostawy", // Adres dostawy pobrany z formularza
            //         status: "pending"
            //       },

            //       {
            //         headers: {
            //             token: "Bearer "+user.accessToken
            //         }
            //       }
            // )
              navigate("/success", {
                state: {
                  stripeData: paymentRes.data,
                  products: cart,
                },
              });
            
          } catch (error) {
            console.log(error);
          }
        };
      
        if (stripeToken && cart.total > 0) {
          makeRequest();
        }
      }, [stripeToken, cart.total, navigate]);
      
      const quantity = useSelector(state=>state.cart.quantity)

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return ( 
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Tittle>Your bag</Tittle>
                <Top>
                    <Link to="/products" style={linkStyle}>
                        <TopButton>Continue shopping</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Shopping bag({quantity})</TopText>
                        <TopText>Your watchlist</TopText>
                    </TopTexts>
                    <TopButton type="filled" onClick={handleClearCart}>Clear cart</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products && cart.products.map(product=><Product>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><b>Product: </b> {product.title} </ProductName>
                                    <ProductId><b>ID: </b>{product._id}</ProductId>
                                    <ProductColor color={product.color}></ProductColor>
                                    <ProductSize><b>Size: </b>{product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    
                                    <ProductAmount>x{product.quantity}</ProductAmount>
                                    
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
                            <Button disabled={user ? false : true}>CHECKOUT NOW</Button>
                            {!user && <Error> You must be logged in to continue </Error>}
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
     );
}
 
export default Cart;