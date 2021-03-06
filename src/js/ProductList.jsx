import React, {Component} from "react";
import Product from './Product.jsx'
import Title from './Title.jsx'
import {ProductConsumer} from "./context.jsx";


class ProductList extends Component {

    render() {
        return (
           <React.Fragment>
           <div className='productList'>
               <div className={'container'}>
                   <Title name='OUR ' title='PRODUCTS' />
                    <div className='row'>
                        <ProductConsumer>
                            {(value)=> {
                                return value.products.map( (product) => {
                                    return <Product key={product.id} product={product} />
                                })
                            }}
                        </ProductConsumer>
                    </div>
               </div>
           </div>
           </React.Fragment>
        );
    }
}

export default ProductList;