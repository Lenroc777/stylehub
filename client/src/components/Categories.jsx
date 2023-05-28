import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import {mobile, laptop} from '../responsive'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    justify-content: space-between;
    /* height: 70vh; */

    ${mobile({
        padding: "0px",
        flexDirection: "column"
    })}
    
    `
const Wrapper = styled.div`
    display: flex;
    padding: 0px;
    justify-content: space-between;

    ${laptop({
        padding: "0px",
        flexDirection: "column"
    })}
`

const Title = styled.h1`
    font-size: 48px;
    padding-left: 5%;
    padding-bottom: 20px;
`
const Categories = () => {
    return ( 
        <Container>
            <Title>Categories</Title>
            <Wrapper>

            {
                categories.map((item)=>
                <CategoryItem key={item.id} item={item}/>
                )
            }
            </Wrapper>
        </Container>
     );
}
 
export default Categories;