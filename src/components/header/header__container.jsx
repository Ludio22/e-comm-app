import React from 'react';
import HeaderParams from './header__params';

const HeaderContainer = () => {
    return (
        <header className="header">
            <div className="header__container">
                <HeaderParams />
            </div>
        </header>
    );
}

export default HeaderContainer;