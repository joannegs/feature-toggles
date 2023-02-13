import { createAction } from "@ngrx/store";
import { BeautyProduct } from "src/app/shared/interfaces/BeautyProduct.interface";

export enum LikeActionType {
    ADD_ITEM = '[LIKE] Add Product to Bag',
    REMOVE_ITEM = '[LIKE] Remove Product from Bag',
    GET_ITEMS = '[LIKE] Get items from bag'
}

export const addItemToBag = createAction(LikeActionType.ADD_ITEM, (product: BeautyProduct) => product);
export const removeItemFromBag = createAction(LikeActionType.REMOVE_ITEM, (product: BeautyProduct) => product);
export const getBag = createAction(LikeActionType.GET_ITEMS)
