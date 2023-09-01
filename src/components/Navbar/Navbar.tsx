import './navbar.css'
import { NavbarAuth } from './NavbarAuth';
import { NavbarLinks } from './NavbarLinks';

export function Navbar () {
  
return (
<div className="navbar" id='navbar'>
    <img className='navbar-logo' src="/pages/home/logo.png"/>
    <NavbarLinks/>
    <NavbarAuth/>
</div>
)
}