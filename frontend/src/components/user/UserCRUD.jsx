import React, {Component} from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir!'
}

export default class UserCRUD extends Component{
    render(){
        return (
            <Main {... headerProps}>
                Cadastro de Usuarios
            </Main>
        )
    }
}