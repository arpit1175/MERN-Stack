import React from 'react'
import styled from 'styled-components'
import {Categories} from "../Data"
import Categoriesitem from './Categoriesitem'

const Category = () => {
    const Container = styled.div`
    
display: flex;
justify-content: space-between ;
background-color:#F9ECDE;


width:100% ;

    `

  return (
    <>
    <Container>
    {Categories.map(e=>(
        <Categoriesitem e={e}/>
    ))}
    </Container>
    </>
  )
}

export default Category