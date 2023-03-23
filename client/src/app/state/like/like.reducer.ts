import { createReducer, on } from "@ngrx/store";
import { loveProduct, removeLoveofProduct } from "./like.actions";
import { BeautyProduct } from 'src/app/shared/interfaces/BeautyProduct.interface';

export interface likeState {
    likes: Array<BeautyProduct>;
}

const initialState: Array<BeautyProduct> = [];

export const likeReducer = createReducer(
    initialState,
    on(loveProduct, (state, product) => [...state, product]),
    on(removeLoveofProduct, (state, product) => [...state].filter(p => p.name !== product.name))
);