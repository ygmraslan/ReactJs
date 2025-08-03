import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function About() {
    return (
        <div>
            <h1>About</h1>
            <hr />
            <Link className='link-child' to="employee">About Employee</Link>
            <Link className='link-child' to="company">About Company</Link>
            <Outlet />
        </div>
    )
}

export default About;