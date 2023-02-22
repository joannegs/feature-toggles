import { createReducer, on } from "@ngrx/store";
import { BeautyProduct } from "src/app/shared/interfaces/BeautyProduct.interface";
import { loveProduct, removeLoveofProduct, getLoveds } from "./like.actions";

export interface bagState {
    bag: Array<BeautyProduct>;
}

const initialState: Array<BeautyProduct> = [];

export const bagReducer = createReducer(
    initialState,
    on(loveProduct, (state) => [...state]),
    on(removeLoveofProduct, (state, product) => [...state, product]),
    
)

