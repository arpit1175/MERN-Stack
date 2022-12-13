import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Ad from '../Components/Ad'
import Footer from '../Components/Footer'
import Inquiry from '../Components/Inquiry'
import Navbar from '../Components/Navbar'
import { useLocation } from 'react-router-dom'
import { publicrequest } from "../requestmethods"
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'



const Container = styled.div`
  
  
`
const Wrapper = styled.div`
padding: 50px;
display: flex;


`
const Imagecontainer = styled.div`
flex: 1;

`
const Image = styled.img`
width:100% ;
height: 80vh;
object-fit:cover ;
 `
const Infocontainer = styled.div`
flex: 1;
padding:0px 50px ;

`

const Title = styled.h1`
font-weight:400 ;

`
const Description = styled.p`
margin: 20px 0px ;

`
const Price = styled.span`
font-weight: 400;
font-size:40px ;
`
const Filtercontainer = styled.div`
width:50% ;
margin:30px 0px;
display: flex;
justify-content: space-between;

`
const Filter = styled.div`
display: flex;
align-items: center;
`
const Filtertitle = styled.span`
font-size:20px ;
font-weight: 200;
`
const Filtercolor = styled.p`
width: 20px;
height: 20px;
border-radius:50% ;
background-color: ${props => props.color} ;
margin: 0 5px ;
cursor: pointer;
`
const Filtersize = styled.select`
margin-left:10px ;
padding: 5px;
`
const Filtersizeoption = styled.option`

`

const Addproduct = styled.div`
display: flex;
width:50% ;
justify-content:space-between ;
`
const Quantitycontainer = styled.div`
display: flex;
align-items:center ;
font-weight: 700;

`
const Quantity = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border:1px solid gray ;
display: flex;
justify-content: center;
align-items:center ;
margin: 0 5px ;

`
const Button = styled.button`
padding: 15px;
border:1px solid gray ;
background-color:white ;
cursor: pointer;
border-radius:5px ;
background-color:skyblue ;
font-weight: 500;
&:hover{
background-color: #66A3FE;
}
`
const Productpage = () => {


  const location = useLocation()
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicrequest.get("/products/find/" + id)
        console.log(res.data)
        setProduct(res.data);
      } catch { }
    };
    getProduct()
  }, [id])



  const handlequantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    }
    if (type === "inc") {
      setQuantity(quantity + 1)
    }
  }
  const updatecart = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size})
      );

      
  }

  return (
    <>

      <Container>
        <Ad />
        <Navbar />
        <Wrapper>
          <Imagecontainer>
            <Image src={product.img} />
          </Imagecontainer>
          <Infocontainer>
            <Title>{product.title}</Title>
            <Description>
              {product.desc}
            </Description>
            <Price>₹ {product.price}</Price>


            <Filtercontainer>
              <Filter>
                <Filtertitle>Color</Filtertitle>

                {product.color?.map((c) => (
                  <Filtercolor color={c} key={c} onClick={() => setColor(c)} />

                ))}
              </Filter>
              <Filter>
                <Filtersize onChange={(e) => setSize(e.target.value)}>

                  <Filtertitle>Size</Filtertitle>
                  {product.size?.map((s) => (

                    <Filtersizeoption key={s}>{s}</Filtersizeoption>
                  ))}


                </Filtersize>
              </Filter>
            </Filtercontainer>
            <Addproduct>
              <Quantitycontainer>
                <Remove onClick={() => handlequantity("dec")} />
                <Quantity>{quantity}</Quantity>
                <Add onClick={() => handlequantity("inc")} />
              </Quantitycontainer>
              <Button onClick={updatecart} >ADD TO CART</Button>
            </Addproduct>



          </Infocontainer>
        </Wrapper>

        <Inquiry />
        <Footer />


      </Container>
    </>
  )
}

export default Productpage