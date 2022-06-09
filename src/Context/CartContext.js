import { createContext , useState } from "react";

const CartContext = createContext ()

const CartProvider = ({children}) =>{

    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product) =>{
        setCartListItems([product])
        console.log("se agrego:", product)
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