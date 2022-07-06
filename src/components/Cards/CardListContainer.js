import React from "react";
import CardItem from "../Cards/CardItem.js";
import { Container, Grid, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { getProducts } from "../../Data/utils.js";

const CardListcontainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((response) => {
      setLoading(false);
      setProducts(response);
    });
  }, []);

  return (
    <Container>
      <h1> Productos en oferta</h1>
      <Grid container spacing={2} margin={4}>
        {loading ? (
         <div className="loading">
          <CircularProgress color="inherit" size={100}/>
        </div>
          
        ) : (
          products.map((product, index) => {
            return (
              <Grid key={`grid_${index}`} item md={3}>
                <CardItem product={product} />
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};
export default CardListcontainer;
