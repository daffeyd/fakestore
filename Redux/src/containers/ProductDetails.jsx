import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchProduct,
    removeSelectedProduct,
} from "../redux/actions/productsActions";
const ProductDetails = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId));
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);
    return (
        <div className="details-container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (

                <div className="product-display">
                    <div className="column lp">
                        <img className="detail-image" src={image} />
                        <div className="divider">AND</div>
                    </div>
                    <div className="column rp">
                        <h1>{title}</h1>
                        <h2>
                            <a className="desc-label">${price}</a>
                        </h2>
                        <h3 className="ui brown block header">{category}</h3>
                        <p>{description}</p>

                        <div className="add-to-cart">Add to Cart</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;