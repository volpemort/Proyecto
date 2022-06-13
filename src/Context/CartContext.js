import { createContext , useState } from "react";

const CartContext = createContext ()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] = useState([])


    const addProductToCart = (product) =>{
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
        console.log("El producto ya se encuentra en el carrito")
    }

    const data ={
        cartListItems,
        addProductToCart
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext