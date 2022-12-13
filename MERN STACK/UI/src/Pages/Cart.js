import { Add, Remove } from '@material-ui/icons'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import StripeCheckout from 'react-stripe-checkout'
import { useNavigate } from 'react-router-dom'






const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align:center ;
`
const Top = styled.div`
display: flex;
align-items: center ;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border:${props => props.type === "filled" && "none"};
background-color:${props => props.type === "filled" ? "black" : "transparent"}  ;
color:${props => props.type === "filled" && "white"};

`

const Toptexts = styled.div`

`
const Toptext = styled.span`
text-decoration:underline ;
cursor: pointer;
margin: 0 10px ;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Info = styled.div`
flex: 3;

`
const Product = styled.div`
display: flex;
justify-content: space-between;
`
const Productdetails = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.span`
padding: 20px;
display: flex;
flex-direction:column ;
justify-content: space-around;
`
const Productname = styled.span`

`
const ProductID = styled.span`

`
const Productcolor = styled.div`
width: 20px;
height: 20px;
border-radius:50% ;
background-color:${props => props.color} ;
`
const Productsize = styled.span`

`
const Price = styled.div`
flex:1 ;
display: flex;
flex-direction:column ;
align-items: center;
justify-content: center;
`

const Amountcontainer = styled.div`
display: flex;
align-items:center ;
margin-bottom:20px ;
`
const Quantity = styled.div`
font-size:24px ;
margin :5px;
`
const Productprice = styled.div`
font-size: 30px;
font-weight: 200;
`
const Hr = styled.hr`
/* background-color : #eee; */
border:none ;
height: 1px;
padding: 10px;
`

const Summary = styled.div`
flex:1 ;
border: 0.5px solid lightgray ;
border-radius: 10px ;
padding: 20px;
height:50vh ;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const Summaryitem = styled.div`
margin:30px 0px ;
display: flex;
justify-content:space-between ;
font-weight:${props => props.type === "total" && "500"} ;
font-size:${props => props.type === "total" && "24px"} ;
`
const Summaryitemtext = styled.span`

`
const Summaryitemprice = styled.span`

`
const Summarybutton = styled.button`
width: 100%;
padding: 10px;
background-color:black ;
color:white ;
font-weight: 600;
cursor: pointer;

`


const Cart = () => {

    const KEY = "pk_test_51M5YdgSFthgwsGCpiYRpj8sGQjOpNbsQPQSsnsetmVEPJQOJ8fz3SpItvl8t7XyIhtOvTQesTR0aB6tnYtbgSIGV000F8ugmKC"


    const cart = useSelector(state => state.cart)

    const navigate = useNavigate();



    const handleclick =  ()=>{

        
    }
   
  


    return (
        <>
            <Container>

                <Navbar />

                <Wrapper>
                    <Title>
                        BAG ITEMS
                    </Title>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                        <Toptexts>
                            <Toptext>Bag ({cart.quantity})</Toptext>
                            <Toptext>WISHLIST</Toptext>
                        </Toptexts>
                        
                    </Top>


                    <Bottom>
                        <Info>
                            {cart.products?.map((product) => (<Product>
                                <Productdetails>
                                    <Image src={product.img}></Image>
                                    <Details>
                                        <Productname><b>PRODUCT : </b>{product.title}</Productname>
                                        <ProductID><b>PRODUCT ID: </b>{product._id}</ProductID>
                                        <Productcolor color={product.color} />
                                        <Productsize><b>SIZE : </b>{product.size}</Productsize>
                                    </Details>
                                </Productdetails>
                                <Price>
                                    <Amountcontainer>

                                        <Quantity>Quantity :  {product.quantity}</Quantity>

                                    </Amountcontainer>
                                    <Productprice>Price: ₹{product.price}</Productprice>
                                </Price>
                                <Hr />

                            </Product>

                            ))}



                        </Info>
                        <Summary>
                            <SummaryTitle>Order summary</SummaryTitle>
                            <Summaryitem>
                                <Summaryitemtext>Subtotal</Summaryitemtext>
                                <Summaryitemprice>₹ {cart.total}</Summaryitemprice>
                            </Summaryitem>
                            <Summaryitem>
                                <Summaryitemtext>Estimated Shipping</Summaryitemtext>
                                <Summaryitemprice>₹20</Summaryitemprice>
                            </Summaryitem>
                            <Summaryitem>
                                <Summaryitemtext>Discounts</Summaryitemtext>
                                <Summaryitemprice>- ₹150</Summaryitemprice>
                            </Summaryitem>
                            <Summaryitem type="total">
                                <Summaryitemtext >Total</Summaryitemtext>
                                <Summaryitemprice>₹{cart.total}</Summaryitemprice>
                            </Summaryitem>
                            <StripeCheckout
                                name='SHOPPERS'
                                shippingAddress
                                billingAddress
                                image='https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=600'
                                description={`Your Total is ₹${cart.total}`}
                                amount={cart.total * 100}
                                
                                stripeKey={KEY}
                            >

                                <Summarybutton onClick={handleclick}>CHECKOUT NOW</Summarybutton>

                            </StripeCheckout>

                        </Summary>
                    </Bottom>

                </Wrapper>
                <Footer />

            </Container>

        </>

    )
}

export default Cart