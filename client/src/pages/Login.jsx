import styled from "styled-components";
import {mobile} from "../responsive"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../redux/apiCalls"

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') center
`
const Wrapper = styled.div`
    
    width: 35%;
    padding: 20px;
    background: #fff;

    ${mobile({
        width: "75%"
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
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Error = styled.span`
    color: red;
`

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state);
//   console.log('current user', currentUser)
    const {isFetching, error} = useSelector((state)=>state.user)
//     console.log(`isFetching ${isFetching}, error ${error}`)

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
    return ( 
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <Form>
                    <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
                    <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <Button onClick={handleClick} disabled={isFetching}>Login</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Link>Forgot your password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
     );
}
 
export default Login;