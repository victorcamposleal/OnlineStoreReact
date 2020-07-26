import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, useParams, useHistory } from 'react-router-dom';
import Cart from './Cart'

function Header(props) {
    return (
        <div className="header">
            <ul className="menuMain">
                <li><a href="/inicio">Menu</a>
                    <ul Class="menu">

                        <li>
                            <Link to="/Admin">Admin</Link>
                        </li>
                        <li>
                            <Link to="/Models">Models</Link>
                        </li>

                        <li>
                            <Link to="/Contact">Contact us</Link>
                        </li>

                    </ul>
                </li>
            </ul>
            <div className="logo">

               <img src="rayito.svg" alt=""/>
                <p><strong>El Rayito Sunglasses</strong></p>
            </div>

            <div class="carritologo">
            
                <Link to="Cart"><img src="/cart.svg" alt="carrito" />  </Link>
                <p id="numeroLogo">{props.cantidad}</p>
            </div>



        </div>
    )

}
export default Header