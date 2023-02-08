import { createReducer, on } from "@ngrx/store";
import { BeautyProduct } from "src/app/shared/interfaces/BeautyProduct.interface";
import { addItemToBag, getBag, removeItemFromBag } from "./bag.actions";


export interface bagState {
    bag: Array<BeautyProduct>;
}

const initialState: Array<BeautyProduct> = [];

export const bagReducer = createReducer(
    initialState,
    on(getBag, (state) => [...state]),
    on(addItemToBag, (state, product) => [...state, product]),
    on(removeItemFromBag, (state, product) => [...state].filter(p => p.name !== product.name))
)

