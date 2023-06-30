import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'

const AllRoutes=()=>{
    return (
        <Routes>
            <Route exact path='/' element={<Dashboard/>} />
            <Route exact path='/auth' element={<Auth/>} />
        </Routes>
    )
}
export default AllRoutes;