import React from 'react';
import {useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";

const ProductCard = () => {
    const {products} = useSelector(state => state.ProductsReducer);
    return (
        <div className="container">
            <div className="row">
                {products.map(product =>(
                    <div className="col-md-4 mt-4" key={product.key}>
                        <div className="product">
                            <div className="product-img">
                                <img src={`/images/${product.image}`} alt="name" />
                            </div>
                            <div className="product-name">
                                {product.name}
                            </div>
                            <div className="d-flex">
                                <div className="product-price">
                                <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'USD' })}</span> <span className="discount">{product.discount}%</span>
                                </div>
                                <div className="product-discount-price">
                                {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
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