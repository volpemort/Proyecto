import React from 'react';
import './NavBar.css'
import CartWidget from '../Cart/CartWidget.js';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { itemCategory } from "../../Data/ProductsMock";

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="static"  >
            
            <Toolbar className='banner'>
            <div className="container-logo">
                <Link to="/"><img src='../logo.png' alt='logo'/></Link>
            </div>
            <ul className='container-menus'>
                <li><Button  color="inherit"><Link  className='links' to="/">Home</Link></Button></li>

                <li>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        Catalogo
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        {itemCategory.map((cat)=>{
                            return <MenuItem onClick={handleClose}><Link  className='links' to={`/product/${cat}`}>{cat}</Link></MenuItem>
                        })}
                        
                        
                    </Menu> </li>
                
            </ul>
            <CartWidget></CartWidget>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar