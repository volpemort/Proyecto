import { createContext , useState } from "react";

const CartContext = createContext ()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const addProductToCart = (product) =>{
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalPrice(totalPrice + product.price)
            return setCartListItems(cartListItems => [...cartListItems, product])
        
        }
        console.log("El producto ya se encuentra en el carrito")
    }

    const deleteProduct =(idValue) =>{
        return setCartListItems( cartListItems.filter(item => !item.id === idValue))
    }

    const data ={
        cartListItems,
        totalPrice,
        addProductToCart,
        deleteProduct
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext