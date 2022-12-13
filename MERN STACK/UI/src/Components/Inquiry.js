import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Inquiry = () => {

const Container = styled.div`
background-color:#fcf5f5 ;
height:60vh ;
display: flex;
align-items:center ;
justify-content: center;
flex-direction:column ;
`
const Title = styled.h1`
margin-bottom:40px ;
font-family: 'Merriweather', serif;
font-size:45px ;
`
const Description = styled.p`
font-size:20px ;
/* font-weight:bold ; */
margin-bottom: 35px;

`
const Inputcontainer = styled.div`
display: flex;
width: 500px;
height:40px ;
border-radius:10px ;


`
const Input = styled.input`
flex:8 ;
border: none;
padding-left:20px ;
`

const Button = styled.button`
flex:1 ;
border:none ;
background-color:teal ;
color: white ;
cursor: pointer;
`


  return (
    <>

    <Container>
        <Title>CONTACT US</Title>
        <Description>
Hello people!! Want to contact us regarding your concern? Just enter you email below, our team will make sure to contact you within 24 hours
        </Description>

        <Inputcontainer>
        <Input placeholder = "Please enter you email"/>
        <Button>
            <Send/>
        </Button>
        </Inputcontainer>        
    </Container>
    
    </>
  )
}

export default Inquiry