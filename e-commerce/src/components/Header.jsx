import React from 'react'
import '../css/Header.css';
import { BsBasket } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Badge from '@mui/material/Badge';
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {
    const [theme, setTheme] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.basket);

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        }
        else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";

        }
    }
    return (
        <div className='header-bar'>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className='logo' src='./src/images/suwen-2.png' />
            </div>

            <div className='flex-row'>
                <input className='src-input' type='text' placeholder='Search' />
                <div >
                    {
                        theme ? <IoMoonOutline className='icon' onClick={changeTheme} /> : <IoSunnyOutline className='icon' onClick={changeTheme} />
                    }
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <BsBasket className='icon' />
                    </Badge>

                </div>
            </div>
        </div>
    )
}

export default Header;