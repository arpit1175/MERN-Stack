import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import {Data} from "../Data"

const Slider = () => {

    const [slideindex, setSlideindex] = useState(0)

    const handleclick = (dir) => {

        if (dir === "left") {
            setSlideindex(slideindex > 0 ? slideindex - 1 : 2)
        } else {
            // setSlideindex(slideindex < 2 ? slideindex + 1 : 0)
            setSlideindex(slideindex ===2 ? 0 : slideindex +1 )
        }

    }

    const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
background-color: beige ;
position:relative ;
overflow:hidden ;
`


    const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color:whitesmoke ;
    border-radius: 50%;
    display: flex;
    align-items: center ;
    justify-content:center ;
    position:absolute ;
    top: 0;
    bottom: 0;
    left:${props => props.direction === "left" && "10px"} ;
    right:${props => props.direction === "right" && "10px"} ;
    margin:auto ;
    opacity:50% ;
    cursor: pointer;
    z-index: 2;
`

    const Wrapper = styled.div`
    height: 100%;
display: flex;
transition : all 2s ease;
transform : translateX(${(props) => props.si * -100}vw) ;


`

    const Slide = styled.div`
display: flex;
align-items: center;
height:100vh ;
width:100vw ;
background-color:#${props => props.bg} ;
`

    const Imagecontainer = styled.div`
    margin-top:35px ;
flex : 1;
height:100% ;
align-items:center ;

`
    const Image = styled.img`
height: 80%;
display: block;
  margin-left: auto;
  margin-right: auto;
 ;

`

    const Infocontainer = styled.div`
flex : 1;
padding: 50px;

`

    const Title = styled.h1`
font-size:70px ;
`
    const Description = styled.p`
margin:50px 0px ;
font-size: 38px;
font-weight: 500;
`
    const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color :transparent;
cursor: pointer;
&:hover {
    opacity:30%;
  }
`


    return (
        <>
            <Container>
                <Arrow direction="left" onClick={() => handleclick("left")}>
                    <ArrowLeftOutlined />
                </Arrow>

                <Wrapper si={slideindex}>
                    {Data.map(e => (

                        <Slide bg={e.bg}>
                            <Imagecontainer>
                                <Image src={e.img} />
                            </Imagecontainer>
                            <Infocontainer>
                                <Title>{e.title}</Title>
                                <Description>{e.desc}</Description>
                                <Button>Expore Now</Button>
                            </Infocontainer>
                        </Slide>


                    ))}

                </Wrapper>

                <Arrow direction="right" onClick={() => handleclick("right")}>
                    <ArrowRightOutlined />
                </Arrow>
            </Container>
        </>
    )
}

export default Slider