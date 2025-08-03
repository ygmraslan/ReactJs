import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/ProductDetail.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from 'react';
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)

    const { price, image, title, description } = selectedProduct;

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    const dispatch = useDispatch();

    useEffect(() => {
        getProductById();

    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }
    return (
        <div className='flex-detail'>
            <div>
                <img src={image} className='detail-image' alt=''></img>
            </div>
            <div>
                <h2 className='title-detail'>{title}</h2>
                <p className='description-detail'>{description}</p>
                <h1 className='price-detail'>{price}₺</h1>
                <div className='circle'>
                    <CiCirclePlus onClick={increment} /> <span style={{ fontSize: '35px' }}>{count}</span> <CiCircleMinus onClick={decrement} />
                </div>
                <div>
                    <button onClick={addBasket} className='button-detail'>Sepete Ekle</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails