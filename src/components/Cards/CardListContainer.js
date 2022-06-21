import React from "react";
import CardItem from "../Cards/CardItem.js";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import fireDataB from "../../Data/FireBaseConfig";
import { collection, getDocs } from "firebase/firestore";

const CardListcontainer = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productSnapshot = await getDocs(collection(fireDataB, "productos"));
    console.log(productSnapshot);
    const productList = productSnapshot.docs.map((doc) => {
      console.log("respuesta doc", doc.data());
      const productData = doc.data();
      productData.id = doc.id;
      return productData;
    });
    return productList;
  };

  useEffect(() => {
    getProducts().then((response) => {
      console.log("Respuesta product:", response);
      setProducts(response);
    });
  }, []);

  return (
    <Container>
      <h1> Productos en oferta</h1>
      <Grid container spacing={2} margin={4}>
        {products.map((product) => {
          return (
            <Grid item md={3}>
              <CardItem product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default CardListcontainer;

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
