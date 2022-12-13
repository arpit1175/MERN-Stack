import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Footer = () => {
    const Container = styled.div`
    display: flex;
    `

    const Left = styled.div`
flex: 1;

display: flex;
justify-content:space-between ;
flex-direction:column ;
`
    const Heading = styled.h1`
padding: 15px;
`
    const Text = styled.p`
padding: 15px;
margin-bottom:20px ;
`
    const Iconcontainer = styled.div`
display: flex;
margin-left:12px ;


`
    const Icons = styled.div`
height: 50px;
width: 50px;
cursor: pointer;

`
    const Center = styled.div`
flex: 1;

`
    const Right = styled.div`
flex: 1;
`
const Title = styled.h3`
margin-top:20px ;
margin-bottom:30px ;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style:none ;
display: flex;
flex-wrap: wrap;
`
const Listitem = styled.li`
width:50% ;
margin-bottom:12px ;
cursor: pointer;

`

const Items = styled.div`
margin-bottom:14px ;
`
    return (
        <>
            <Container>
                <Left>
                    <Heading>
                        SHOPPERS
                    </Heading>
                    <Text>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                        dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim.
                    </Text>

                    <Iconcontainer>
                        <Icons>
                            <Facebook />
                        </Icons>
                        <Icons>
                            <Instagram />
                        </Icons>
                        <Icons>
                            <Twitter />
                        </Icons>
                    </Iconcontainer>


                </Left>
                <Center>
                    <Title>
More Items
                    </Title>
                    <List>
                        <Listitem>Home</Listitem>
                        <Listitem>Cart</Listitem>
                        <Listitem>Product</Listitem>
                        <Listitem>Coontact Us</Listitem>
                        <Listitem>Careers</Listitem>
                        <Listitem>Latest</Listitem>
                        <Listitem>About Us</Listitem>
                    </List>
                </Center>
                <Right>
                    <Title>Contact Details</Title>
                    <Items>
                        <Room/> 122 adfj lsn dd
                    </Items>
                    <Items>
                        <LocalPhoneOutlined/> +91 3232232323
                    </Items>
                    <Items>
                        <EmailOutlined/> email@jksjk.com
                    </Items>
                    
                </Right>
            </Container>
        </>
    )
}

export default Footer