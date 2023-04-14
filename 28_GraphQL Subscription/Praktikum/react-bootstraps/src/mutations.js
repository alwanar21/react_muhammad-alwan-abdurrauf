import { gql } from "@apollo/client";


export const DELETE_PRODUCT = gql`
mutation deleteProduct($id: Int!) {
    delete_product_by_pk(id: $id) {
        id
        product_name
        product_category
        product_freshness
        additional_information
        price
    }
}
`;

export const EDIT_PRODUCT = gql`
mutation update_a_product($id: Int!, $additional_information: String!, $price: numeric!, $product_category: String!, $product_freshness: String!, $product_name: String!) {
    update_product_by_pk(pk_columns: {id: $id}, _set: {additional_information: $additional_information, id: $id, price: $price, product_category: $product_category, product_freshness: $product_freshness, product_name: $product_name}) {
        id
        product_name
        product_category
        product_freshness
        additional_information
        price
    }
}
`;