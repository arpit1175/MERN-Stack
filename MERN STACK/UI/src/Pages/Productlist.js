import React, { useState } from 'react'
import styled from 'styled-components'
import Ad from '../Components/Ad'
import Footer from '../Components/Footer'
import Inquiry from '../Components/Inquiry'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import {
    useLocation
} from "react-router-dom";
import { red } from '@material-ui/core/colors'

const Productlist = () => {

    const Container = styled.div`

`
    const Title = styled.h1`
margin: 20px;
`
    const Filtercontainer = styled.div`
display: flex;
justify-content:space-between ;
`
    const Filter = styled.div`
margin:20px ;
`

    const Filtertext = styled.span`
font-size:20px ;
font-weight:600 ;
margin-right: 20px;
`

    const Select = styled.select`
padding: 10px;
margin-right:20px ;
`
    const Option = styled.option`

`

    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filter, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filter,
            [e.target.name]: value,
        });
    }

    return (
        <>

            <Container>
                <Ad />
                <Navbar />
                <Title>
                    {cat}
                </Title>
                <Filtercontainer>
                    <Filter><Filtertext>Filter Products : </Filtertext>
                        <Select name="color" onChange={handleFilters}>
                            <Option disabled >Color</Option>
                            <Option>white</Option>
                            <Option>yellow</Option>
                            <Option>black</Option>
                            <Option>blue</Option>
                            

                        </Select>
                        <Select name="size" onChange={handleFilters}>
                            <Option disabled >Size</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>

                        </Select>
                    </Filter>
                    <Filter><Filtertext>Sort Products : </Filtertext>
                        <Select onChange={(e)=>setSort(e.target.value)}>
                            <Option value = "newest">Newest</Option>
                            <Option value = "asc">Price (asc)</Option>
                            <Option value = "desc">Price (desc)</Option>


                        </Select>
                    </Filter>
                </Filtercontainer>
                <Products cat = {cat} filters = {filter} sort = {sort}/>
                <Inquiry />
                <Footer />


            </Container>
        </>
    )
}

export default Productlist