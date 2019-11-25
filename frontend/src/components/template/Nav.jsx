import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu container-fluid">
            {/*Refatorar criar uma classe*/}
            <Link to="/">
                <i className="fa fa-home">
                    &nbsp;Início
                </i>
            </Link>
            <Link to="/users">
                <i className="fa fa-users">
                    &nbsp;Usuários
                </i>
            </Link>
        </nav>
    </aside>


