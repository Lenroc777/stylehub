import { Facebook, Instagram, Phone, Twitter } from "@material-ui/icons";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from "styled-components";
import {mobile} from "../responsive"

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

const Footer = () => {
    return ( 
        <Container>
            <Left>
                <Logo>LAMA</Logo>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque sunt corrupti dignissimos tempore molestias consequatur sit exercitationem sed reprehenderit, natus animi magni dolores possimus ipsam provident quae eius saepe repellat. Perspiciatis amet itaque sapiente quos repellendus!
                </Description>
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
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man fashion</ListItem>
                    <ListItem>Woman fashion</ListItem>
                    <ListItem>My account</ListItem>
                    <ListItem>Order tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms and policy</ListItem>
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
                    contact@email.com
                </ContactItem>
            </Right>
        </Container>
     );
}
 
export default Footer;