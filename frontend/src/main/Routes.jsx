import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from '../componets/home/Home'
import UserCrud from '../componets/user/UserCrud'


export default props =>
    <Routes>
        <Route exact path= "/" element={<Home/>}/>
        <Route path="/users" element={<UserCrud/>}/>
        <Route path="*" element ={<Home/>}/>
    </Routes>