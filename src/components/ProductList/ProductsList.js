import React from "react";
import CardItem from "../Cards/CardItem.js";
import { Container, Grid } from "@mui/material";
import { useEffect, useState} from "react"
import productos from "../../Data/ProductsMock"
import { useParams } from "react-router-dom";


const ProductsList = () => {
  
    const [products, setProducts] = useState([])
    const {category} = useParams ()

  console.log("categoria", category)
  
    const getProducts = () =>{
      return new Promise ((resolve, reject) =>{
        
          resolve(productos)
        
      })
    }
    useEffect (() => {
      getProducts()
      .then((response) =>{
            setProducts([])
            filterByCategory(response)
          })
          
    },[category])
    
    const filterByCategory = (array) =>{
        return array.map(( item ) =>{
            if(item.category == category){
                return setProducts( products =>[...products, item])
            }
        })
    
    }
      return(
          <Container>
            <h1> {`${category}`} </h1>
            <Grid container spacing ={2} margin ={4}>

                {products.map(({title, price, image, stock, id }) =>{
    
                    return(
                    <Grid item md={3} >
                    <CardItem title={title} price={price} image = {image} stock={stock} id={id} />
                    </Grid>
                ) 
                })
                }
              
            </Grid>
          </Container>
            )
  
          }

export default ProductsList