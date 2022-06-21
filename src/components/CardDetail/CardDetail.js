import ItemCount from "../Count/ItemCount";
import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CardDetail = ({ product }) => {
  const [showButton, setShowButton] = useState(false);
  const { addProductToCart } = useContext(CartContext);

  const onAdd = (count) => {
    setShowButton(true);
    addProductToCart(product, count);
  };

  return (
    <div className="detailBox">
      <div className="">
        <img src={`../${product.image}`} alt="" />
      </div>
      <div className="">
        <h1>{product.title} </h1>
        <p> Precio $ {product.price}</p>
        <span>Stock {product.stock}</span>

        {!showButton ? (
          <ItemCount
            stocks={product.stock}
            onAdd={onAdd}
            setShowButton={setShowButton}
          />
        ) : (
          <Button>
            {" "}
            <Link to="/cart">Finalizar Compra</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardDetail;
