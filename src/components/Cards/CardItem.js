import React from "react";
import "./CardItem.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CardItem = ({
  product,
  product: { title, image, price, stock, id, initial, quantity },
}) => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="cardStyle" key={id}>
          <div className="imgBox">
            <img src={`/${image}`} alt="alt" />
          </div>
          <div className="cardBox">
            <p>{title}</p>
            <span>${price}</span>
          </div>

          <div className="buttonBox">
            <Button variant="contained">
              <Link className="linksItem" to={`/products/${id}`}>
                Detalle
              </Link>
            </Button>

            <Button
              variant="contained"
              onClick={() => addProductToCart(product)}
            >
              Agregar Carrito
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
