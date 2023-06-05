import React from 'react'
import First from './First'
import {Test} from './Test'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='' element={<Test/>}/>
            <Route path='test' element={<First/>}/>
            
        </Routes>
    </Router>
  )
}

export default MyRoutes