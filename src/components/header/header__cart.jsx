import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderCart = () => {
    return (
        <div className="header__cart">
            <NavLink to="/cart">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.43848 19.833C7.74914 19.833 8.00098 19.5812 8.00098 19.2705C8.00098 18.9598 7.74914 18.708 7.43848 18.708C7.12782 18.708 6.87598 18.9598 6.87598 19.2705C6.87598 19.5812 7.12782 19.833 7.43848 19.833Z" fill="#22262A" stroke="#22262A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.3135 19.833C15.6241 19.833 15.876 19.5812 15.876 19.2705C15.876 18.9598 15.6241 18.708 15.3135 18.708C15.0028 18.708 14.751 18.9598 14.751 19.2705C14.751 19.5812 15.0028 19.833 15.3135 19.833Z" fill="#22262A" stroke="#22262A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.25098 1.83301H3.50098L5.75098 15.333H17.001L19.251 5.20801H4.62598" stroke="#22262A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </NavLink>
            <p>items</p>
            <p className="header__cart-price">$0.00</p>
        </div>
    );
}

export default HeaderCart;