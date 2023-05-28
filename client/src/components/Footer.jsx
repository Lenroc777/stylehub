import { Facebook, Instagram, Phone, Twitter } from "@material-ui/icons";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from "styled-components";
import {mobile} from "../responsive"
import { Link } from "react-router-dom";
const Container = styled.div` 
    display:flex;
    margin-bottom: 30px;
    ${mobile({
        flexDirection: "column"
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
`
const Logo = styled.h1`
    margin-bottom: 10px;
    margin-top: 30px;
`

const Description = styled.p`
    margin-bottom: 20px;

`
const SocialContainer = styled.div`
    width: 20%;    
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    /* justify-content: space-between; */
    cursor: pointer;

    ${mobile({
        width: "100%"
    })}
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Center = styled.div`
    flex: 1;

    ${mobile({
        display: "none"
    })}
`

const Title = styled.h3`
    margin: 30px 0;
    font-size: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    font-size: 20px;
`
const Right = styled.div`
    flex: 1;

    ${mobile({
        padding: "0px 20px",
        marginBottom: "20px",
        bckgroundColor: "#eee"
    })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };

const Footer = () => {
    return ( 
        <Container>
            <Left>
                <Logo>StyleHub</Logo>
                <Description>
                At StyleHub, we believe that fashion is an art form that empowers individuals to express their unique personalities and embrace their inner style icons. With an unwavering commitment to quality, innovation, and customer satisfaction, we curate a diverse collection of fashion-forward clothing and accessories that cater to every taste and occasion.                </Description>
                <SocialContainer>
                    <SocialIcon color="#3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="#E4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="#55acee">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem><Link to="/" style={linkStyle}>Home</Link></ListItem>
                    <ListItem><Link to="/cart" style={linkStyle}>Cart</Link></ListItem>
                    <ListItem><Link to="/products/man" style={linkStyle}>Man fashion</Link></ListItem>
                    <ListItem><Link to="/products/woman" style={linkStyle}>Woman fashion</Link></ListItem>
                    <ListItem><Link to="/products/child" style={linkStyle}>Child fashion</Link></ListItem>
                    <ListItem><Link to="/orders" style={linkStyle}>My orders</Link></ListItem>
                    <ListItem><Link to="/" style={linkStyle}></Link>Wishlist</ListItem>
                    <ListItem><Link to="/" style={linkStyle}>Terms and policy</Link></ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <LocationOnIcon style={{marginRight: "10px"}}/>
                    Lipowa 13, 02-220 Lublin
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>
                    +38 123 432 123
                </ContactItem>
                <ContactItem>
                    <AlternateEmailIcon style={{marginRight: "10px"}}/>
                    info@stylehub.com
                </ContactItem>
            </Right>
        </Container>
     );
}
 
export default Footer;