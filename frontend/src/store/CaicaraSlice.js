import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  removidos: [],
  adicionalHortela: false,
  quantidade: 1,
};

const caicaraSlice = createSlice({
  name: "caicara",
  initialState,
  reducers: {
    toggleIngrediente(state, action) {
      const ingrediente = action.payload;
      if (state.removidos.includes(ingrediente)) {
        state.removidos = state.removidos.filter(i => i !== ingrediente);
      } else {
        state.removidos.push(ingrediente);
      }
    },
    setAdicionalHortela(state, action) {
      state.adicionalHortela = action.payload;
    },
    setQuantidade(state, action) {
      state.quantidade = action.payload;
    },
    resetCaicara(state) {
      state.removidos = [];
      state.adicionalHortela = false;
      state.quantidade = 1;
    }
  }
});

export const { toggleIngrediente, setAdicionalHortela, setQuantidade, resetCaicara } = caicaraSlice.actions;
export default caicaraSlice.reducer;