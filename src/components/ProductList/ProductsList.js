import React from "react";
import CardItem from "../Cards/CardItem.js";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../Data/utils.js";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Container>
      <h1> {`${category}`} </h1>
      <Grid container spacing={2} margin={4}>
        {products.map((product, index) =>
          product.category === category ? (
            <Grid key={`ProductsList_Product_${index}`} item md={3}>
              <CardItem product={product} />
            </Grid>
          ) : null
        )}
      </Grid>
    </Container>
  );
};

export default ProductsList;
