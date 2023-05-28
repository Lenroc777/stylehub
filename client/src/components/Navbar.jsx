import React from "react";
import styled from "styled-components";
import { SearchOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { Badge } from "@mui/material";
import {mobile} from "../responsive"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { useDispatch } from "react-redux";



const Container = styled.div`
    height:60px;

    ${mobile({
        heigh: "50px"
    })}
`
const Wrapper = styled.div`

    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    ${mobile({
        padding: "10px 0px"
    })}

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        display: "none"
    })}
`


const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    margin-left: 25px;
`

const Input = styled.input`
    border: none;
    ${mobile({
        width: "50px"
    })}
`

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({
        fontSize: "24px"
    })}
`

const Center = styled.div`
    flex: 1;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    ${mobile({
        justifyContent: "center",
        flex: 2,
        paddingRight: "0px"
    })}
`
const MenuItem = styled.div`
    flex: 1;
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;


    ${mobile({
        fontSize: "12px",
        marginLeft: "10px",
        maxWidth: "30%",
    })}
`

const linkStyle = {
    textDecoration: "none",
    color: 'black'
};



const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector(state=>state.user.currentUser);
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch(logout())
    }
    
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>

                        <Input placeholder="Search"></Input>
                        <SearchOutlined style={{color:"gray", fontSize:16}} />

                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/" style={linkStyle}>
                        <Logo>
                            StyleHub
                        </Logo>
                    </Link>
                </Center>
                <Right>
                    {user ? <MenuItem>Hello {user.username}</MenuItem> : <Link to="/register" style={linkStyle}><MenuItem>Register</MenuItem></Link>  }
                    {user ? <MenuItem onClick={handleLogout}>  Logout  </MenuItem>  : <Link to="/login" style={linkStyle}><MenuItem>Login</MenuItem></Link>  }
                    {/* <MenuItem>Sign in</MenuItem> */}

                    <Link to="/cart" style={linkStyle}>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartCheckoutOutlined/>
                        </Badge>
                        
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
     );
}
 
export default Navbar;