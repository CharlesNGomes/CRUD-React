import React from 'react'
import Main from '../templates/Main'

export default props =>
    <Main icon="home" title="Inicio" subtitle="O cabelo na altura da sua cor">
        <div className="conteudo display-4 text-danger">Bem-Vindo</div>
        <hr />
        <h3 className="texto p-2 font-weight-light">Aqui você faz o seu proprio estilo</h3>
    </Main>