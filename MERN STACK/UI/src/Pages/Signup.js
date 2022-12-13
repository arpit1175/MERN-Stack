import React from 'react'
import styled from 'styled-components'

const Signup = () => {


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
width: 40%;
background-color:white ;
border-radius:20px ;

`
    const Title = styled.h1`
    font-size:24px ;
    font-weight:300 ;
`
    const Form = styled.form`
    display: flex;
    flex-wrap:wrap;
`
    const Input = styled.input`
    flex:1;
    min-width:40% ;
    margin: 20px 10px 0 0;
    padding: 10px;
`
    const Text = styled.p`
font-size:12px ;
margin:20px 0px ;
color:white ;
cursor: pointer;
`
    const Button = styled.button`
width: 40%;
border:none ;
background-color:teal ;
padding: 15px 20px;
cursor: pointer;
`

    return (
        <>
            <Container>
                <Wrapper>
                    <Title>CREATE ACCOUNT</Title>
                    <Form>
                        <Input placeholder="name"></Input>
                        <Input placeholder="last name"></Input>
                        <Input placeholder="username"></Input>
                        <Input placeholder="email"></Input>
                        <Input placeholder="password"></Input>
                        <Input placeholder="confirm password"></Input>
                        <Text>By creating an account , I agree to the processing of my personal data in accordance with the <b>PRIVAY POLICY</b></Text>
                        <Button>CREATE</Button>
                    </Form>
                </Wrapper>
            </Container>

        </>
    )
}

export default Signup