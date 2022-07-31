import { createSlice } from "@reduxjs/toolkit";

export const markFavoriteSlice = createSlice({
    name : "favoriteMeals",
    initialState : [],
    reducers : {
        toggleFavorite : ( state, action ) => {
            if(state.includes(action.payload)){
                state.splice(state.indexOf(action.payload), 1);
            }else{
                state.push(action.payload);
            }
        }
    }
});

export const { toggleFavorite } = markFavoriteSlice.actions;
export default markFavoriteSlice.reducer;