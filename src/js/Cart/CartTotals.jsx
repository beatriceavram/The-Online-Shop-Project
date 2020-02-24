import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from "./PayPalButton.jsx";

export default function CartTotals({value, history}) {
    const {cartSubtotal, cartTax, cartTotal,clearCart} = value;

    return (
        <React.Fragment>
         <div className='container'>
             <div className='row'>
                 <div className='col-10'>
                     <Link to='/'>
                         <button className='btn-cart' onClick={()=> clearCart()} >CLEAR CART</button>
                     </Link>
                     <h5><span>SUBTOTAL : </span>
                     <strong>{cartSubtotal} $</strong></h5>

                     <h5><span>TAX : </span>
                         <strong>{cartTax} $</strong></h5>

                     <h5><span>TOTAL : </span>
                         <strong>{cartTotal} $</strong></h5>
                     <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/>
                 </div>
             </div>
         </div>
        </React.Fragment>
    );
}