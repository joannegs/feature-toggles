import { createAction } from "@ngrx/store";
import { BeautyProduct } from "src/app/shared/interfaces/BeautyProduct.interface";

export enum BagActionType {
    ADD_ITEM = '[BAG] Add Product to Bag',
    REMOVE_ITEM = '[BAG] Remove Product from Bag',
    GET_ITEMS = '[BAG] Get items from bag'
}

export const addItemToBag = createAction(BagActionType.ADD_ITEM, (product: BeautyProduct) => product);
export const removeItemFromBag = createAction(BagActionType.REMOVE_ITEM, (product: BeautyProduct) => product);
export const getBag = createAction(BagActionType.GET_ITEMS)
