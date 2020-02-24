import React, {Component} from "react";
import {ProductConsumer} from "./context.jsx";
import {Link} from 'react-router-dom';

// import button container

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, img, title, price, company, info, inCart } = value.detailProduct;

                    return (
                        <div className='section-details'>
                        <div className='container details'>
                            {/* title */}
                            <div className='row details-1'>
                                <div className='col-10'>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*product info*/}
                            <div className='row details-2'>
                                <div className='col-10'>
                                    <div className='col-6'>
                                        <img src={img} className='' alt='product'/>
                                    </div>
                                    <div className='col-6'>
                                        <h1>Model: {title}</h1>
                                        <h4>Made by: <span> {company}</span></h4>
                                        <h4>Price: {price} <span>$</span></h4>
                                        <p>Details about the product:</p>
                                        <p>{info}</p>

                                            <Link to='/'>
                                                <button>
                                                    Back to Products
                                                </button>
                                            </Link>

                                                <button disabled={inCart?true:false}
                                                onClick={()=> {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                                    {inCart? 'inCart' : 'Add to Cart'}
                                                </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}

export default Details;