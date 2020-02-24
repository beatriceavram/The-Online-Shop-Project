import React from 'react'
import {context} from '../context.jsx';

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;

    return (
        <div className='row'>
            <div className='col-10'>
                <img src={img} alt='product'/>
            </div>

            <div className='col-10'>
                <span className='span-display-none'>Product:</span> {title}
            </div>

            <div className='col-10'>
                    <span className='span-display-none'>Price: </span> {price} $
            </div>

            <div className='col-10'>
                <div>
                    <span className='span-display-none'>Quantity: </span>
                    <span onClick={()=> decrement(id)}> - </span>
                    <span>{count}</span>
                    <span onClick={()=> increment(id)}> + </span>
                </div>
            </div>
            <div className='col-10'>
                <span className='span-display-none'>Remove: </span>
                <div className='card-icon' onClick={()=> removeItem(id)}> <i className='fas fa-trash' /> </div>
            </div>

            <div className='col-10'>
                <span className='span-display-none'>Item Total:  </span>
                <strong>{total} $</strong>
            </div>

        </div>
    )
}