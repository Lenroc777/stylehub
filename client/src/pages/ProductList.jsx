import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Products from '../components/Products';
import {mobile} from "../responsive"
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';


const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;

    ${mobile({
        margin: "0px 20px",
        display: "flex",
        flexDirection: "column"
    })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right:20px;

    ${mobile({
        marginRight: "0px"
    })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;

    ${mobile({
        margin: "10px 0px"
    })}
`
const Option = styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = (location.pathname.split("/")[2])
    // if(cat == "" || cat == " " || cat == undefined){
    //     cat=null;
    // }
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")
    const handleFilters = (e)=>{
        const val = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: val,
        })
    }

    return ( 
        <Container>
            <Navbar/>
            <Announcement/>
            {cat ? <Title>{cat}</Title> : <Title>All products</Title>}
            <FilterContainer>
                <Filter>
                    <FilterText>Products</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>orange</Option>
                        <Option>red</Option>
                        <Option>green</Option>
                        <Option>blue</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>X</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort products</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
     );
}
 
export default ProductList;