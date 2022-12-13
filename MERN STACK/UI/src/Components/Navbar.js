import { Badge } from '@material-ui/core'
import { LocalMallOutlined, Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


const Container = styled.div`
height: 85px;
 ;
`

const Wrapper = styled.div`
padding:10px 20px ;
display: flex;
justify-content:space-between ;
align-items:center ;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items:center ;
`
const Lang = styled.span`
font-size: 14px;
cursor:pointer ;
`

const SearchContainer = styled.div`
border: 1px solid black;
border-radius:5px ;
display: flex;
align-items:center ;
margin-left: 25px ;
padding: 5px;
`
const Input = styled.input`
border:none ;
`
const Center = styled.div`
flex: 1;
text-align: center ;
`

const Logo = styled.h1`
font-weight: bold ;
text-decoration:none ;

`
const Right = styled.div`
flex: 1;
display: flex;
justify-content:flex-end ;
`
const Menu = styled.div`
margin: 25px;
cursor: pointer;
font-weight:bold ;
`



const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity)
    

    return (
        <Container>
            <Wrapper>

                <Left>
                    <Lang>
                        EN
                    </Lang>
                    <SearchContainer>
                        <Input />
                        <Search></Search>
                    </SearchContainer>
                </Left>

                <Center>
                    <Link to="/">
                    <Logo>SHOPPERS.</Logo>
                    </Link>
                    
                    
                    </Center>

                <Right>
                    <Menu>Sign Up</Menu>
                    <Menu>Sign In</Menu>
                    <Link to ="/cart">
                    <Menu>
                        <Badge badgeContent={quantity} color="primary" overlap="rectangular">
                            <LocalMallOutlined/>
                        </Badge>
                    </Menu>
                    </Link>
                </Right>


            </Wrapper>
        </Container>
    )
}

export default Navbar