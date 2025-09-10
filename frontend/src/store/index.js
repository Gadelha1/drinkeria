import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./ModalSlice";
import tabReducer from "./TabSlice";
import caicaraReducer from "./CaicaraSlice";
const store = configureStore({
    reducer: {
        modal: modalReducer,
        tab: tabReducer,
        caicara: caicaraReducer,
        
    },
});

export { store };
