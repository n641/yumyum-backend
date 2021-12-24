import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <NavLink exact to="/login">login</NavLink>
            <NavLink exact to="/register">register</NavLink>
        </ul>
    )

}
export default Nav