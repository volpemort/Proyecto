import DeleteIcon from "@mui/icons-material/Delete";
import { Container, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useState, useContext } from "react";
import CartContext from "../../Context/CartContext";
import Modal from "../Modal/Modal.js";
import fireDataB from "../../Data/FireBaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";



const Cart = () => {

  const { cartListItems, deleteProduct, cartTotal, resetCart } = useContext(CartContext);


  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState();
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    mail: "",
  });
  const [order, setOrder] = useState({
    buyer: {},
    item: cartListItems.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      };
    }),
    date: Date(),
    total: cartTotal,
  });

  const saveData = async (newOrder) => {
    const orderFirebase = collection(fireDataB, "ordenes");
    const orderDoc = await addDoc(orderFirebase, newOrder);
    setSuccess(orderDoc.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder({ ...order, buyer: formValue });
    saveData({ ...order, buyer: formValue }).then((response) => {
      console.log("Compra exitosa! ", response);
      resetCart();
    });
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const finishOrder = () => {
    navigate("/");
  };
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
      {cartListItems.length === 0 && (
        <div className="emptyCart">
          <p>No hay productos agregados al carrito</p>
          <Button  variant="contained" className="btn-custom"><Link className="linksItem" to="/">Empezar a comprar</Link></Button>
        </div>
      )}
      {cartListItems.map((item) => {
        return (
          <div className="item-cart-prod" key={item.id}>
            <div className="cart-image">
              <img src={`/${item.image}`} alt="prod carrito" />
            </div>
            <div className="cart-info">
                <p>{item.title}</p>
                <h3>{item.quantity}</h3>
                <span>$ {item.price}</span>
              
            </div>
            <div className="cart-prod__action">
              <button onClick={() => deleteProduct(item.id)}>
                <DeleteIcon />
              </button>
            </div>
          </div>
        );
      })}
      <div className="shopBox">
        
        <div className="priceBox">
          <p>Precio Total</p>
          <span>${cartTotal}</span>
        </div>
        <div className="shop-btn">
            <Button  variant="contained" className="btn-custom" onClick={() => setShowModal(true)}>
              Completar Compra
            </Button>            
            <Button variant="contained" className="btn-custom">
              <Link className="linksItem" to="/"> Seguir Comprando </Link>
            </Button>
        </div>
      </div>

      
      <Modal
        title={success ? "Compra exitosa" : "Formulario de contacto"}
        open={showModal}
        handleClose={() => setShowModal(false)}
      >
        {success ? (
          <div>
            <p>Orden Generada</p>
            <h2>{success}</h2>
            <button onClick={finishOrder}>Seguir Comprando</button>
          </div>
        ) : (
          <form className="form-contact" onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Nombre y Apellido"
              variant="outlined"
              name="name"
              value={formValue.name}
              onChange={handleChange}
              required
            />
            <TextField
              id="outlined-basic"
              label="Mail"
              variant="outlined"
              name="mail"
              value={formValue.mail}
              onChange={handleChange}
              required
            />
            <TextField
              id="outlined-basic"
              label="Telefono"
              variant="outlined"
              name="phone"
              value={formValue.phone}
              onChange={handleChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        )}
      </Modal>
    </Container>
  );
};

export default Cart;
