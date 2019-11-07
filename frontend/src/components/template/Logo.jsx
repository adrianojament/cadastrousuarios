import './Logo.css'
import React from 'react'
import logoimg from '../../assets/imgs/user512.png'

export default props => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logoimg} 
                alt="logo"/>
        </a>
    </aside>
