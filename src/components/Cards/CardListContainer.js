import React from "react";
import CardItem from "../Cards/CardItem.js";
import { Container, Grid } from "@mui/material";
import { useEffect, useState} from "react"
import productos from "../../Data/ProductsMock"


const CardListcontainer = () => {
  
  const [products, setProducts] = useState([])

  const getProducts = () =>{
    return new Promise ((resolve, reject) =>{
      setTimeout(() => {
        resolve(productos)
      }, 2000);
      
    })
  }

  useEffect (() => {
    getProducts()
    .then((response) =>{
          console.log("Respuesta promesa:", response)
          setProducts (response)
        })
        
  },[])
  

    return(
        <Container>
          <h1> Productos en oferta</h1>
          <Grid container spacing ={2} margin ={4}>
            {products.map(({title, price, image, stock, id, initial }) =>{

              return(
              <Grid item md={3} >
                <CardItem title={title} price={price} image = {image} stock={stock} id={id} initial={initial} />
              </Grid>
             ) 
            })
            }
            
          </Grid>
        </Container>
          )

        }
        export default CardListcontainer

        /* <Grid container  margin={5}>
            <Grid item md={3} >
              <CardItem title="Calibre 1" price="$10.000"  image={"calibre-mecanico-con-dial.jpg"} />
            </Grid>
            <Grid item md={3} >
              <CardItem title="Calibre 2" price="$9.000" image={"Calibre-Pie-de-rey-500-171-30B.jpg"} />
            </Grid>
            <Grid item md={3} >
              <CardItem title="Calibre 3" price="$15.000" image={"Calibre-Serie-500-IP67.jpg"} />
            </Grid>
          </Grid>
         */