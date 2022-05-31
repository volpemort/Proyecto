import React from 'react';
import './NavBar.css'
import CartWid from '../Cart/CartWidget.js';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const NavBar = () => {
    
    return (
        <AppBar position="static"  >
            
            <Toolbar className='banner'>
            <div className="container-logo">
                <img src='../logo.png' alt='logo'/>
            </div>
            <ul className='container-menus'>
                <li><Button  color="inherit"><Link  className='links' to="/">Home</Link></Button></li>
                <li><Button  color="inherit"><Link  className='links' to="/products">Productos</Link></Button></li>
                <li><Button  color="inherit"><Link  className='links' to="/info">Info</Link></Button></li>
            </ul>
            <CartWid></CartWid>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar