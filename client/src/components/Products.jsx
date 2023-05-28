import styled from 'styled-components'
import Product from './Product';
import { popularProducts } from '../data';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
    padding-top: 60px;
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content: center;
 
 `
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
 `

const Title = styled.h1`
    font-size: 48px;
    padding: 20px;
    padding-left: 5%;
`

const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(()=>{
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products?category")
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts();
    }, [cat])

    useEffect(()=>{
        cat && setFilteredProducts(
            products.filter((item)=>{
                return Object.entries(filters).every(([key, value])=>{
                    return item[key].includes(value)
                })
            })
        )
     
    }, [products, cat, filters])

    useEffect(()=>{
        if(sort === "newest"){
            setFilteredProducts(prev=>{
                return [...prev].sort((a, b)=> a.createdAt - b.createdAt)
            })
        }else if ((sort === "asc")){
            setFilteredProducts(prev=>{
                return [...prev].sort((a, b)=> a.price - b.price)
            })
        }else{
            setFilteredProducts(prev=>{
                return [...prev].sort((a, b)=> b.price - a.price)
            })
        }
    }, [sort])
    console.log(products)
    return ( 
        <Container>
            <Title>Products</Title>
            <Wrapper>

            {cat ? filteredProducts.map(item=>(
                <Product item={item} key={item._id} />
                )) : products.slice(0, 8).map(item=>(
                    <Product item={item} key={item._id} />
                    ))}

            </Wrapper>
        </Container>
     );
}
 
export default Products;