import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';




const NavBar = () => {
    
    return (
        <AppBar position="static"  >
            
            <Toolbar className='banner'>
            <div className="container-logo">
                <img src='./logo.png' alt='logo'/>
            </div>
            <ul className='container-menus'>
                <li><Button  color="inherit">Home</Button></li>
                <li><Button  color="inherit">Productos</Button></li>
                <li><Button  color="inherit">Info</Button></li>
            </ul>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar