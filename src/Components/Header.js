import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    return(
        <ul style={{backgroundColor: props.bg}}>
            <li onClick={() => props.setText("Home")}><Link to="/">Home</Link></li>
            <li onClick={() => props.setText("Explore")}><Link to="/explore"> Explore</Link></li>
            <li onClick={() => props.setText("Product")}><Link to="/product"> Product</Link></li>
            <li onClick={() => props.setText("cart")}><Link to="/cart"> Cart</Link></li>
        </ul>
    );
};
export default Header;