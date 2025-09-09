import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./ModalSlice";
import tabReducer from "./TabSlice";

const store = configureStore({
    reducer: {
        modal: modalReducer,
        tab: tabReducer,
    },
});

export { store };
