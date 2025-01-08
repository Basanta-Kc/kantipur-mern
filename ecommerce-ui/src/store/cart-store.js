import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      handleIncrement: (index) => {
        const cart = get().cart;
        cart[index].quantity++;
        set({
          cart: [...cart],
        });
      },
      handleDecrement: (index) => {
        const cart = get().cart;
        const finalQuantity = --cart[index].quantity;
        if (finalQuantity === 0) {
          cart.splice(index, 1);
        }
        set({
          cart: [...cart],
        });
      },
      resetCart: () => {
        set({
          cart: [],
        });
      },
      addToCart: (product) => {
        // set(state => {
        //       const cart = state.cart;
        //       const productExist = cart.find(({ _id }) => _id === product._id);

        //       if (productExist) {
        //         productExist.quantity++;
        //       } else {
        //         const { _id, name, price, image } = product;
        //         cart.push({
        //           _id,
        //           name,
        //           price,
        //           image,
        //           quantity: 1,
        //         });
        //       }

        //       return {
        //         cart: [...cart],
        //       }
        // })
        const cart = get().cart;
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

        set({
          cart: [...cart],
        });
        // setCart([...cart]);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
// addToCart(product)
