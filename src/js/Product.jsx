import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {ProductConsumer} from "./context.jsx";

class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;

        return (
            <div className='productWrapper'>
                <div className='card'>
                    <ProductConsumer>
                        {(value) => (
                            <div className='img-container' onClick={ () => value.handleDetail(id)}>
                                <Link to='/details'>
                                    <img src={img} alt='productImage' className='imgCard'/>
                                </Link>
                                <button className='cart-btn'
                                        disabled={inCart? true : false}
                                        onClick={() => {
                                            value.openModal(id);
                                            value.addToCart(id);
                                        }}>
                                    {inCart?(
                                        <p className='btn' disabled>
                                            {' '}
                                            in Cart
                                        </p>
                                    ):(
                                        <i className='fas fa-cart-plus' />
                                    )}
                                </button>
                            </div>
                        )}

                    </ProductConsumer>
            </div>
                {/* card footer */}
                <div className='card-footer'>
                    <p>{title}</p>
                    <h5><span>{price} <strong>$</strong></span></h5>
                </div>

            </div>
        );
    }
}

export default Product;