import './Logo.css'
import React from 'react'
import logoimg from '../../assets/imgs/user512.png'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logoimg} 
                alt="logo"/>
        </Link>
    </aside>
