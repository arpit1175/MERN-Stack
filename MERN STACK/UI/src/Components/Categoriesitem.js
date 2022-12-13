import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Categoriesitem = ({e}) => {


const Container = styled.div`
height: 80vh ;
flex:1 ;
padding: 8px;
position:relative ;
&:hover {
    opacity:80%;
  }
;

`


const Image = styled.img`
width:100% ;
height:100% ;
border-radius:10px ;
object-fit:cover ;


`
const Info = styled.div`
position:absolute ;
width: 100%;
height: 100%;
top:0 ;
left:0 ;
display: flex;
flex-direction:column ;
align-items:center ;
justify-content: center;


`
const Title = styled.h1`
font-size:40px ;
font-family: 'Merriweather', serif;
color:white ;
font-weight:bolder ;
margin-bottom: 20px;
`
const Button = styled.button`
border:none ;
padding: 15px;
background-color:white ;
cursor: pointer;
`
  return (
    <>
    <Container>
      <Link to= {`/products/${e.cat}`}>
        <Image src={e.img}/>
        <Info>
            <Title>{e.title}</Title>
            <Button>SHOW ME</Button>
        </Info>
      </Link>

    </Container>
    </>
  )
}

export default Categoriesitem