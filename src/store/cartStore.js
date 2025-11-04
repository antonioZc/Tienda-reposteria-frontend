// src/store/cartStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      totalCart: 0,

      // 🛒 Añadir producto
      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find(
            (p) =>
              p.id === product.id &&
              p.size === product.size &&
              p.color === product.color
          );
          if (existing) {
            // Si ya existe, aumenta cantidad
            return {
              cart: state.cart.map((p) =>
                p.id === product.id &&
                p.size === product.size &&
                p.color === product.color
                  ? { ...p, quantity: p.quantity + 1 }
                  : p
              ),
            };
          }
          // Si no existe, lo añade con cantidad 1
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      // ➖ Quitar producto
      removeFromCart: (id, size, color) =>
        set((state) => ({
          cart: state.cart.filter(
            (p) => !(p.id === id && p.size === size && p.color === color)
          ),
        })),

      // Aumentar cantidad
      increaseQuantity: (id, size, color) =>
        set((state) => ({
          cart: state.cart.map((p) =>
            p.id === id && p.size === size && p.color === color
              ? { ...p, quantity: p.quantity + 1 } // <-- inmutable +1
              : p
          ),
        })),

      // Disminuir cantidad (si llega a 0 lo eliminamos)
      decreaseQuantity: (id, size, color) =>
        set((state) => {
          const newCart = state.cart
            .map((p) =>
              p.id === id && p.size === size && p.color === color
                ? { ...p, quantity: p.quantity - 1 } // <-- inmutable -1
                : p
            )
            .filter((p) => p.quantity > 0); // eliminamos los que quedan a 0
          return { cart: newCart };
        }),

      calcTotal: () =>
        set((state) => ({
          totalCart: state.cart.reduce(
            (total, p) => total + p.price * p.quantity,
            0
          ),
        })),

      // 🧹 Vaciar carrito
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // 🔹 nombre en localStorage
    }
  )
);
