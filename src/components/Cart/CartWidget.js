import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState, useContext } from "react";
import Menu from "@mui/material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import CartContext from "../../Context/CartContext";
import {Button} from "@mui/material";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

const CartWidget = () => {
  const { cartListItems, deleteProduct, resetCart } = useContext(CartContext);
  // const { deleteProduct } = useContext(CartContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Badge badgeContent={cartListItems.length} color="success">
        <ShoppingCartIcon
          fontSize="large"
          color={"primary"}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
      </Badge>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="container-item-list-cart">
          {cartListItems.length === 0 && (
            <div className="emptyCart">
              <p>No hay productos agregados al carrito</p>
              <Button variant="contained" className="btn-custom"><Link className="linksItem" to="/">Empezar a comprar</Link></Button>
            </div>
          )}
          {cartListItems.map((item) => {
            return (
              <div className="item-cart-prod" key={item.id}>
                <div className="cart-prod__image">
                  <img src={`/${item.image}`} alt="prod carrito" />
                </div>
                <div className="cart-prod__info">
                  <p>{item.title}</p>
                  <span>$ {item.price}</span>
                </div>
                <div className="cart-prod__action">
                  <button onClick={() => deleteProduct(item.id)}>
                    <DeleteIcon />
                  </button>
                  <p>Cant {item.quantity}</p>
                </div>
              </div>
            );
          })}
          <button className="reset-cart-button" onClick={resetCart}>
            <DeleteIcon />
          </button>
        </div>
      </Menu>
    </div>
  );
};

export default CartWidget;
