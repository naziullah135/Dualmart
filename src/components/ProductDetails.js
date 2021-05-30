import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import currencyFormatter from "currency-formatter";
import {useDispatch, useSelector} from 'react-redux';
import {BsDash, BsPlus} from "react-icons/bs";
const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductsReducer);
    console.log(product);
useEffect(()=>{
    dispatch({type: 'PRODUCT', id})
},[id])
const decQuantity = () => {
    if(quantity > 1) {
        setQuantity(quantity-1)
    }
}
    return (
      <div className="container details-sec mb-4">
         <div className="row">
         <div className="col-md-6">
            <div className="details-img">
                <img src={`/images/${product.image}`} alt="name" />
            </div>
          </div>
          <div className="col-md-6">
          <div className="details-name">
                    {product.name}
                </div>
                <div className="details-prices">
    <span className="details-actaul">{currencyFormatter.format(product.price, { code: 'USD' })}</span>
    <span className="details-discount">{currencyFormatter.format(product.discountPrice, { code: 'USD' })}</span>

                </div>
                <div className="details-info">
                    <div className="details-incDec">
                    <span className="dec" onClick={decQuantity}><BsDash /></span>
    <span className="quantity">{quantity}</span>
    <span className="inc" onClick={() => setQuantity(quantity+1)}><BsPlus/></span>
    <button className="btn-default" onClick={() => dispatch({type: 'ADD_TO_CART', payload: {product, quantity} })}>add to cart</button>
    </div>
                </div>
                <div className="details-p">
                    <h4>Details</h4>
                    {product.desc}
                </div>
          </div>
         </div>
      </div>
    );
};

export default ProductDetails;