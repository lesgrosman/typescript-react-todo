import React from 'react'

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper blue darken-1">
            <a href="/" className="brand-logo logo">My Todo App</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/">Todo List</a></li>
                <li><a href="/">Info</a></li>
            </ul>
        </div>
    </nav>
)


    

