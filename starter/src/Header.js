// tittle sida

//Vi skapar Header component
//Header behöver inte göra super mycket
// i första läget. 

import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

const Header = () =>{
    return(
        <div>
            <header className='header'>
            <h1>Emoji Search</h1>
            </header>
        </div>
    )

}

export default Header;