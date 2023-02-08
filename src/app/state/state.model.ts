import { BeautyProduct } from "src/app/shared/interfaces/BeautyProduct.interface";

export interface AppState {
    readonly bag: Array<BeautyProduct>;
}