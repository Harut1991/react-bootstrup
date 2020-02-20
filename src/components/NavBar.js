import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavBar = () => 
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                Note App
            </div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to={'/'} className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
                </li>
                {/* active */}
                <li className="nav-item ">
                    <NavLink to={'/about'} className="nav-link" >About <span className="sr-only">(current)</span></NavLink>
                </li>
            </ul>
        </nav>
    
