import DeleteIcon from "@mui/icons-material/Delete";
import { Container, Button } from "@mui/material";
import {Link} from "react-router-dom";
import "./Cart.css";
import { useState, useContext } from "react";
import CartContext from "../../Context/CartContext";

const Cart = () => {
  const { cartListItems, deleteProduct, cartTotal } = useContext(CartContext);
  return (
    <Container>
      <div className="cartMenu">
        <div>
          <h2>Producto</h2>
          <h2>Descripcion</h2>
          <h2>Cantidad</h2>
          <h2>Precio</h2>
          <h2>Quitar</h2>
        </div>
      </div>
      {cartListItems.map((item) => {
        return (
          <div className="item-cart-prod" key={item.id}>
            <div className="cart-image">
              <img src={`/${item.image}`} alt="prod carrito" />
            </div>
            <div className="cart-info">
              <div>
                <p>{item.title}</p>
                <h3>{item.quantity}</h3>
                <span>$ {item.price}</span>
              </div>
            </div>
            <div className="cart-prod__action">
              <button onClick={() => deleteProduct(item)}>
                <DeleteIcon />
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <p>Precio Total</p>
        <span>${cartTotal}</span>
        <Button> Finalziar Compra</Button>
      </div>
      <div >
        <Link to = "/"><Button> Seguir Comprando </Button></Link>
        
      </div>

    </Container>
  );
};

export default Cart;
