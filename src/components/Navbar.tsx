import React from 'react'

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper blue darken-1">
            <a href="/" className="brand-logo logo">My Todo App</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <a href="https://github.com/lesgrosman/typescript-react-todo"><i className="fa fa-github fa-2x git"></i></a>
            </ul>
        </div>
    </nav>
)


    

