import React, {Component} from 'react';

class EmptyCart extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10'>
                        <h1>YOUR CART IS CURRENTLY EMPTY</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmptyCart;