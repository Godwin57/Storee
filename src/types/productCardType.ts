import { ratingType } from "./fetchProductsType"

export interface productCardType{
    imageurl: string;
    title: string;
    rating: ratingType;
    description: string;
}