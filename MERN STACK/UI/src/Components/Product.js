import React from 'react'
import styled from 'styled-components'
import { Favorite, LocalMall, Search } from '@material-ui/icons';
import {Link} from 'react-router-dom'

const Info = styled.div`
display:flex ;
position: absolute;
opacity:0% ;
    `


const Container = styled.div`
flex:1;
margin: 5px;
min-width: 350px;
height:420px ;
display:flex ;
align-items:center ;
justify-content: center;
/* padding:5px ; */
/* background-color:#E7E8E7 ; */
position: relative;
border-radius:3%;
&:hover {
  opacity:75%;
  ${Info}{
    opacity: 100%;
  }

  }

  `


const Circle = styled.div`

`

const Image = styled.img`
 width:95% ;
height:95% ;
border-radius:10px ;
object-fit:cover ;
`

const Icon = styled.div`
width:40px ;
height: 40px;
background-color:white ;
border-radius:50% ;
display:flex ;
align-items:center ;
justify-content: center;
margin:10px ;
cursor: pointer;
&:hover {
background-color:whitesmoke ;
  transform: scale(1.1);
  
}

`

const Product = ({ e }) => {




  return (
    <>
      <Container>
        <Circle />
        <Image src={e.img}/>
        <Info>
          <Icon>
            <LocalMall />
          </Icon>
          <Icon>
            <Link to = {`/product/${e._id}`}>
            <Search />
            </Link>
          </Icon>
          <Icon>
            <Favorite />
          </Icon>
        </Info>
      </Container>
    </>
  )
}

export default Product