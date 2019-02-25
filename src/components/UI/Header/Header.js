import React from 'react';
import classes from './Header.css';

const Header = (props) => {
    return (
        <header className={classes.Toolbar}>
            <nav className={classes.DesktopOnly}>
                Star Cadet
            </nav>
        </header>
    )
}

export default Header