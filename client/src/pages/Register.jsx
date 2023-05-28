import styled from "styled-components";
import {mobile, tablet} from "../responsive"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../redux/apiCalls"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {register} from "../redux/userRedux";
const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;


`
const FormContainer= styled.div`
background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') top;
background-size: cover;
height: 90vh;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
      
width: 35%;
padding: 30px;
margin: 40px;
background-color: #fff;


    ${mobile({
        width: "75%"
    })}
    ${tablet({
        width: "65%"
    })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    `
    const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;    
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;

    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const LinkText = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Error = styled.span`
    color: red;
`
const linkStyle = {
    textDecoration: "none",
    color: 'black',
};

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Register = () => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        const userData = {
        //   name,
        //   lastName,
          username,
          email,
          password,
        };
        dispatch(register(userData));
      };

const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    return ( 
        <Container>
            <Navbar></Navbar>
            <FormContainer>
            <Wrapper>
                <Title>Create an account</Title>
                <Form>
                <Input
          type="text"
          placeholder="name"
          required
          pattern="[A-Za-z]+"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="last name"
          required
          pattern="[A-Za-z]+"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="username"
          required
          pattern="[A-Za-z0-9]+"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
          placeholder="email"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          required
          minLength="8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
                    <Agreement>By creating an account I consent to the processing of my personal data in accordance with the PRIVACY POLICY.</Agreement>
                    <Button  onClick={handleClick}>Create</Button>
                </Form>
            </Wrapper>
            </FormContainer>
            <Footer></Footer>
        </Container>
     );
}
 
export default Register;