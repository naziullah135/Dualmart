import React from 'react';
import {useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import { Link } from 'react-router-dom';

const ProductCard = () => {
    const {products} = useSelector(state => state.ProductsReducer);
    return (
        <div className="container mb-5">
            <div className="row">
                {products.map(product =>(
                    <div className="col-md-4 col-sm-6 mt-4" key={product.key}>
                        <div className="product">
                            <div className="product-img">
                                <Link to={`/details/${product.id}`}><img src={`/images/${product.image}`} alt="name" /></Link>
                            </div>
                            <div className="product-name">
                                {product.name}
                            </div>
                            <div className="d-flex">
                                <div className="product-price">
                                <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'USD' })}</span> <span className="discount">{product.discount}%</span>
                                </div>
                                <div className="product-discount-price d-flex justify-content-end">
                                <span>{currencyFormatter.format(product.discountPrice, { code: 'USD' })}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default ProductCard;