import { gql } from "@apollo/client";

export const GET_SINGLE_PRODUCT = gql`
    subscription getProduct {
        product(limit: 3) {
            id
            product_name
            additional_information
        }
    }
`;


export const GET_PRODUCTS = gql`
subscription getAllProduct {
    product {
        id
        product_name
        product_category
        product_freshness
        additional_information
        price
    }
}
`;
