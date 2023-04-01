import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [
        {
            id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
            productName: "bag",
            productCategory: "classic",
            productFreshness: "Brand new",
            productPrice: "34",
            image: "Doe",
            additionalDescription: "Doe",

        },
        {
            id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
            productName: "T-shirt",
            productCategory: "minimalis",
            productFreshness: "Second",
            productPrice: "15",
            image: "Doe",
            additionalDescription: "Doe",

        }

    ]
    // counter: 7
};
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});
export default userSlice.reducer