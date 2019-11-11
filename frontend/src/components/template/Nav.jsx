import './Nav.css'
import React from 'react'

export default props => 
    <aside className="menu-area">
        <nav className="menu container-fluid">
            {/*Refatorar criar uma classe*/}
            <a href="#/">
                <i className="fa fa-home">
                    &nbsp;Início
                </i>                
            </a>
            <a href="#/users">
                <i className="fa fa-users">
                    &nbsp;Usuários
                </i>
            </a>            
        </nav>
    </aside>


