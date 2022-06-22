import DeleteIcon from "@mui/icons-material/Delete";
import { Container, Button, TextField } from "@mui/material";
import {Link} from "react-router-dom";
import "./Cart.css";
import { useState, useContext } from "react";
import CartContext from "../../Context/CartContext";
import Modal from "../Modal/Modal.js"
import fireDataB from "../../Data/FireBaseConfig";
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from "react-router-dom"


const Cart = () => {
  const { cartListItems, deleteProduct, cartTotal } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState()
  const [formValue, setFormValue] = useState({
    name:'',
    phone:'',
    mail:'',
  })
  const [order, setOrder] = useState({
    buyer:{},
    item:cartListItems.map((item)=>{
      return {
        id:item.id,
        title: item.title,
        price:item.price,
        quantity:item.quantity
      }
    }),
    date:Date(),
    total:cartTotal,
  })

  const saveData = async (newOrder) => {
    const orderFirebase = collection(fireDataB, 'ordenes')
    const orderDoc = await addDoc(orderFirebase, newOrder)
    setSuccess(orderDoc.id)
    // cleanCartProducts()
}

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrder({...order, buyer: formValue})
    saveData({...order, buyer: formValue})
}

const handleChange = (e) =>{

  setFormValue({...formValue,[e.target.name] : e.target.value})
}

const navigate = useNavigate()
const finishOrder = () =>{
  navigate("/")
}
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
            <>
              <p>No hay productos agregados al carrito</p>
              <Link to="/">Empezar a comprar</Link>
            </>
          )}
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
      <div className="shopBox">
        <p>Precio Total</p>
        <span>${cartTotal}</span>
        <div>
          <Button className='btn-custom' onClick={() => setShowModal(true)}>Completar Compra</Button>
        </div>
      </div>
      <div >
        <Link to = "/"><Button> Seguir Comprando </Button></Link>
        
      </div>
      <Modal title={success ? 'Compra exitosa' : 'Formulario de contacto'} open={showModal} handleClose={() => setShowModal(false)}>
                {success ? 
                (<div>
                  <p>Orden Generada</p>
                  <h2>{success}</h2>
                  <button onClick={finishOrder}>Seguir Comprando</button>
                </div>)
                :(<form className="form-contact" onSubmit={handleSubmit} >
                <TextField id="outlined-basic" label="Nombre y Apellido" variant="outlined" name="name" value={formValue.name} onChange={handleChange} />
                <TextField id="outlined-basic" label="Mail" variant="outlined" name="mail" value={formValue.mail}  onChange={handleChange} />
                <TextField id="outlined-basic" label="Telefono" variant="outlined" name="phone" value={formValue.phone}  onChange={handleChange} />
                <button type="submit">Enviar</button>
                </form>) }
                
        </Modal>
    </Container>
  );
};

export default Cart;
