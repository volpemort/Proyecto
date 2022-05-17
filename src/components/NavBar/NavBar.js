import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';




const NavBar = () => {
    
    return (
        <AppBar  position="static" >
            
            <Toolbar >
            <div className="container-logo">
                <img src='./favicon.ico' alt='logo'/>
            </div>
            <ul className='container-menus'>
                <li><a>Home</a></li>
                <li><a>Products</a></li>
                <li><a>Store</a></li>
            </ul>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar