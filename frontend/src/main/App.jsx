import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'

import Logo from '../componets/templates/Logo'
import Home from '../componets/home/Home'
import Footer from '../componets/templates/Footer'
import Nav from '../componets/templates/Nav'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

export default props =>

<BrowserRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
    </div>
</BrowserRouter>
