import React, { useState } from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux"
import { login } from '../redux/apicall'




const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) ,
url("https://images.pexels.com/photos/10003524/pexels-photo-10003524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") ;
background-size:100% 100% ;
display: flex;
align-items:center ;
justify-content: center;

`
    const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color:white ;
border-radius:20px ;

`
    const Title = styled.h1`
    font-size:24px ;
    font-weight:300 ;
`
    const Form = styled.form`
    display: flex;
    flex-direction:column ;
`
    const Input = styled.input`
    flex:1;
    min-width:40% ;
    margin: 10px 0;
    padding: 10px;
`

    const Button = styled.button`
width: 40%;
border:none ;
background-color:teal ;
padding: 15px 20px;
cursor: pointer;

`
    const Link = styled.a`
margin:8px ;
font-size:12px ;
cursor: pointer;
`

    const Links = styled.div`
display: flex;
justify-content:space-between ;
padding: 0px 5px;
margin-top:5px ;
text-decoration:underline ;
`

    const Buttoncontainer = styled.div`
display: flex;
justify-content:flex-end ;
padding:0px 7px ;
margin-top:4px ;
`

const Signin = () => {

const [username, setUsername]=useState("");
const [password, setPassword]=useState("");
const dispatch = useDispatch()
const {isFetching,error} = useSelector((state)=>state.user)

const handleclick = (e)=>{
    e.preventDefault()

    
    login(dispatch, {username, password} );
}
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>Login </Title>
                    <Form>
                        <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}></Input>
                        <Input placeholder="password" onChange={(e)=>setPassword(e.target.value)}></Input>
                        <Buttoncontainer>
                            <Button onClick={handleclick} disbled={isFetching}>LOG IN</Button>
                        </Buttoncontainer>
                        <Links>
                            <Link>FORGOT PASSWORD ?</Link>
                            <Link>CREATE NEW ACCOUNT</Link>
                        </Links>
                    </Form>
                </Wrapper>
            </Container>

        </>
    )
}

export default Signin