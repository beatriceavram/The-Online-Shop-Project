import React, {Component} from "react";
import {ProductConsumer} from "./context.jsx";
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (<div className='modalContainer'>
                                <div className='container'>
                                    <div className='row'>
                                        <div id='modal' className='col-8'>
                                            <h2>item added to the cart</h2>
                                            <img src={img} className='img-modal' alt='product'/>
                                            <h5>{title}</h5>
                                            <h5> Price: {price} $</h5>
                                            <div className='modal-btns'>
                                                <Link to='/'>
                                                    <button onClick={() => closeModal()}>Store</button>
                                                </Link>
                                                <Link to='/cart'>
                                                    <button onClick={() => closeModal()}>Cart</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;