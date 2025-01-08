import { useState, createContext, useContext, useEffect, useMemo } from "react";

const CartContext = createContext(null);

export const useCart = () => {
  return useContext(CartContext);
};

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return JSON.parse(cart) ?? [];
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getCartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    //if item aleady exist
    // set(state => { })
    const productExist = cart.find(({ _id }) => _id === product._id);

    if (productExist) {
      productExist.quantity++;
    } else {
      const { _id, name, price, image } = product;
      cart.push({
        _id,
        name,
        price,
        image,
        quantity: 1,
      });
    }

    setCart([...cart]); // set()
  };

  const handleDecrement = (index) => {
    const finalQuantity = --cart[index].quantity;
    alert(finalQuantity);
    if (finalQuantity === 0) {
      cart.splice(index, 1);
    }
    setCart([...cart]);
  };

  const handleIncrement = (index) => {
    cart[index].quantity++;
    setCart([...cart]);
  };

  const resetCart = () => setCart([]);

  const total = useMemo(
    () => cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        handleDecrement,
        handleIncrement,
        resetCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// cart = [tshirt, pant, ihpne]
// proced to payment - click -> express (basant-cart-items)
// order = basanta (tishir, pant, ihphone 1000, status=pending) (after payment = complete)
// express => stripe = cart-items(tshir,pant, ihpne = 1000) => page (url)
// frontend(url) (credit cart) => submit => payment processing => done
// stripe => after payment complete (api call /stripe/order/orderId (webhook))
