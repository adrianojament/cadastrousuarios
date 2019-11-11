import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Main from '../components/template/Main'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'


export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Main icon="home" 
            title="Inicio"
            subtitle="Segundo Projeto do capitulo de React">
            <div className="display-4">
                Bem Vindo!
            </div>
            <hr/>
            <p className="mb-0">Sistema para exemplificar 
                a construção de um cadastro desenvolvido em 
                React!</p>
        </Main>
        <Footer/>
    </div>