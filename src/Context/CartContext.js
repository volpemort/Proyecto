import { createContext, useMemo, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);

  const addProductToCart = (product, quantity = 1) => {
    let isInCart = cartListItems.some((cartItem) => cartItem.id === product.id);
    if (!isInCart) {
      setCartListItems((cartListItems) => [
        ...cartListItems,
        { ...product, quantity: quantity },
      ]);
    } else {
      setCartListItems((cartListItems) =>
        cartListItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        })
      );
    }
  };

  const deleteProduct = (idValue) => {
    return setCartListItems(
      cartListItems.filter((item) => item.id !== idValue)
    );
  };

  const resetCart = () => {
    setCartListItems([]);
  };

  const cartTotal = useMemo(
    () =>
      cartListItems.reduce(
        (suma, product) => product.price * product.quantity + suma,
        0
      ),
    [cartListItems]
  );

  const data = {
    cartListItems,
    addProductToCart,
    deleteProduct,
    resetCart,
    cartTotal,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
