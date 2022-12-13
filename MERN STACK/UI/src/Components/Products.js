import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Productsdata } from "../Data"
import Product from './Product';
import axios from "axios";


const Container = styled.div`
padding: 8px;
display: flex;
justify-content:space-between ;
flex-wrap:wrap ;
align-items:center ;
background-color:#E7E8E7 ;

`

const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const getproducts = async () => {
      try {
        const res = await axios.get(
          cat ? 
          `http://localhost:5000/api/products?category=${cat}` 
        : "http://localhost:5000/api/products");
        setProducts(res.data)
      } catch (err) {
        console.log(err)
      };
    }; getproducts()
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      ))
    )
  }, [products, cat, filters]);

  return (
    <>
      <Container>
        {cat ? filteredproducts.map((e) => (
          <Product e={e} key={e.id} />
        )):products.map((e) => (
          <Product e={e} key={e.id} />))

      
      }

      </Container>
    </>
  )
}

export default Products;