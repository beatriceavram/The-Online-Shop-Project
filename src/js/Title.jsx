import React, {Component} from "react";
import ProductList from "./ProductList.jsx";

export default function Title ({name, title}) {
    return (
    <div className='row'>
        <div className='.col-10'>
            <h1>
                {name}
                <strong>{title}</strong>
            </h1>
        </div>
    </div> );
}
