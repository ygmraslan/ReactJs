import React from 'react'
import { useNavigate } from 'react-router-dom';


function Product({ product }) {

    const { id, name, price } = product;
    const navigate = useNavigate();


    return (
        <div className='product'>
            <div>Product Detail </div>
            <h4>Name: {name}</h4>
            <h4>Price: {price}</h4>
            <button onClick={() => navigate("/product/details/" + id)}>go detail...</button>
        </div>
    )
}

export default Product; 