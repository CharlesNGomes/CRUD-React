import './Nav.css'
import React from 'react'
import IconLink from '../iconLink/navIcons'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <IconLink href="/" icon="home" menu="Inicio"/>
            <IconLink href="/users" icon="users" menu="Usuários"/>
        </nav>
    </aside>