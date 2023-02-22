import { createReducer, on } from "@ngrx/store";
import { BeautyProduct } from "src/app/shared/interfaces/BeautyProduct.interface";
import { loveProduct, removeLoveofProduct, getLoveds } from "./like.actions";

export interface bagState {
    likes: Array<BeautyProduct>;
}

const initialState: Array<BeautyProduct> = [];

export const likeReducer = createReducer(
    initialState,
    on(loveProduct, (state) => [...state]),
    on(removeLoveofProduct, (state, product) => [...state, product]),
    
)

