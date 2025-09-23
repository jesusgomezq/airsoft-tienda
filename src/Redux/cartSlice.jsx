import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Agregamos un Producto al carrito
    addToCart(state, action) {
      state.push(action.payload);
    },

    // Eliminar un Producto del carrito
    deleteItemToCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },

     clearCart  ()  {
      
       return initialState;
    },

    // Incrementamos un producto en el carrito
    incrementQuantity(state, action) {
      state = state.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
        }

        return item;
      });
    },

    // Disminuimos un producto del carrito
    decrementQuantity(state, action) {
      state = state.map((item) => {
        if (item.quantity > 1) {
          if (item.id === action.payload) {
            item.quantity--;
          }
        }
        return item;
      });
    },
  },
});

// Exportamos todas las funciones
export const {
  addToCart,
  clearCart,
  deleteItemToCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
