import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link className='link' to='/'>Home Page</Link>
            <Link className='link' to='/about'>About </Link>
            <Link className='link' to='/products'>Our Products</Link>
            <Link className='link' to='/contact'>Contact Us</Link>
        </div>
    )
}

export default Header