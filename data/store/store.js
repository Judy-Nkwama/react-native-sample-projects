import { configureStore } from "@reduxjs/toolkit";
import favoriteMeals from "./features/favoriteMeals";

const store = configureStore({
    reducer : {
        favoriteMeals : favoriteMeals
    }
});

export default store;