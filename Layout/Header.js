import classes from './Header.module.css';
import Icon from '../Icons/Icon.js';
import SearchIcon from '../Icons/SearchIcon';
import OffersIcon from '../Icons/OffersIcon';
import HelpIcon from '../Icons/HelpIcon';
import SignInIcon from '../Icons/SignInIcon';
import CartIcon from '../Icons/CartIcon';

const Header=()=>{
    return(
        <header className={classes.header}>
       
        <Icon />
        <div>
            <p><span>Hyderabad</span>
        <span>Telangana 500016, India</span></p>
        </div>
        
        <p><SearchIcon />
           <span>Search</span></p>
        <p><OffersIcon/><span>Offers</span></p>
        <p><HelpIcon /><span>Help</span></p>
        <p><SignInIcon /><span>Sign In</span></p>
        <p><CartIcon /><span>Cart</span></p>

        

        </header>

    )
};
export default Header;