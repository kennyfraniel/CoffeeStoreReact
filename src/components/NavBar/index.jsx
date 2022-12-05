import React from "react";
import CartWidget from '../CartWidget'
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to='/'>COFFEE STORE</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/categoria/limpieza'>Limpieza</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/categoria/maquinaria'>Maquinaria</NavLink>
                        </li>
                    </ul>
                    <NavLink className='nav-link' to='cart'>
                        <CartWidget/>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;