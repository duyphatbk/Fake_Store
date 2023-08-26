import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from '../redux/actions/productAction';
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Error", err);
            })
        dispatch(setProducts(response.data));
    };
    fetchProducts();
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
};
export default ProductListing;