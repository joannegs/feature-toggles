import { createAction } from "@ngrx/store";
import { BeautyProduct } from "src/app/shared/interfaces/BeautyProduct.interface";

export enum LikeActionType {
    ADD_ITEM = '[LOVE] Love Product',
    REMOVE_ITEM = '[LOVE] Remove Love of Product',
    GET_ITEMS = '[LOVE] Get Loved Products'
}

export const loveProduct = createAction(LikeActionType.ADD_ITEM, (product: BeautyProduct) => product);
export const removeLoveofProduct = createAction(LikeActionType.REMOVE_ITEM, (product: BeautyProduct) => product);
export const getLoveds = createAction(LikeActionType.GET_ITEMS)
