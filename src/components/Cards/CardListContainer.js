import React from "react";
import CardItem from "../Cards/CardItem.js";
import { Container, Grid } from "@mui/material";
import { useEffect, useState} from "react"

const CardListcontainer = () => {
  
  const productos = [
    { title :"Calibre Estandar",
      price : 1000,
      image :"Calibre-Pie-de-rey-500-171-30B.jpg",
      stock : 5,
      id: 1
  },
    { title :"Calibre Con Reloj",
      price : 4000,
      image :"calibre-mecanico-con-dial.jpg",
      stock : 3,
      id: 2
  },
  { title :"Calibre IP67",
    price : 6000,
    image :"Calibre-Serie-500-IP67.jpg",
    stock : 10,
    id: 3
    },
  ]
  
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