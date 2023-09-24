import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        // nav bar
        <nav>
            {/* logo with link to home */}
            <h1>
                <Link to='/'>Job Hunt</Link>
            </h1>
            {/* links list */}
            <div>
                <Link to='/'>Home</Link>
                <Link to='/applied-jobs'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <button>Start Applying</button>
        </nav>
    );
};

export default Header;