import React, {Component} from "react";
import Title from "../Title.jsx";
import CartColumns from '../Cart/CartColumns.jsx';
import EmptyCart from './EmptyCart.jsx';
import {ProductConsumer} from "../context.jsx";
import CartList from './CartList.jsx';
import CartTotals from './CartTotals.jsx';

class Cart extends Component {
    render() {
        return (

                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return (
                                <section className='cart-full'>
                                    <div className='container'>
                                        <Title name='YOUR ' title='CART'/>
                                    </div>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotals value={value} history={this.props.history}/>
                                </section>
                            )
                        } else {
                            return <div className='cart-empty' >
                                    <EmptyCart/>
                                    </div>;
                        }
                    }}
                </ProductConsumer>


        );
    }
}

export default Cart;